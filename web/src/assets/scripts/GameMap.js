import { AcGameObject } from "./AcGameObject"; //如果export default，不需要加{}，否则需要加{}
import { Wall } from "./Wall";

export class GameMap extends AcGameObject {
    constructor(ctx, parent) {
        super(); //调用父类（基类）的构造函数
        this.ctx = ctx;
        this.parent = parent;
        
        this.L = 0; //代表一个格子的绝对距离

        this.cols = 13;
        this.rows = 13;

        this.inner_walls_count = 80;
        this.walls = [];
    }

    check_connectivity(g, sx, sy, tx, ty) {
        if (sx == tx && sy == ty) return true;
        g[sx][sy] = true;

        let dx = [-1, 0, 1, 0], dy = [0, 1, 0, -1]; //上下左右四个方向
        for (let i = 0; i < 4; i++) {
            let x = sx + dx[i], y = sy + dy[i];
            // 递归检测相邻点。因为四周墙，不用做越界检查
            if (!g[x][y] && this.check_connectivity(g, x, y, tx, ty)) {
                return true;
            }
        }
        return false;
    }

    create_walls() { //创建墙
        const g = [];
        for (let r = 0; r < this.rows; r++) {
            g[r] = [];
            for (let c = 0; c < this.cols; c++) {
                g[r][c] = false;
            }
        }

        //给四周加上障碍物
        for (let r = 0; r < this.rows; r++) {
            g[r][0] = g[r][this.cols - 1] = true;
        }

        for (let c = 0; c < this.cols; c++) {
            g[0][c] = g[this.rows - 1][c] = true;
        }

        //随机生成障碍物,对角线的墙不能是障碍物,填充内部的墙，对称填充。一次循环填两个墙体
        for (let i = 0; i < this.inner_walls_count / 2; i++) {
            for (let j = 0; j < 1000; j++) {
                let r = parseInt(Math.random() * this.rows);
                let c = parseInt(Math.random() * this.cols);
                if (g[r][c] || g[c][r]) continue; //如果是障碍物，则跳过
                if (r == this.rows - 2 && c == 1 || r == 1 && c == this.cols - 2) continue; //对角线的墙不能是障碍物

                g[r][c] = g[c][r] = true;
                break;
            }
        }

        const copy_g = JSON.parse(JSON.stringify(g)); //检查地图是否联通。复制一份地图，防止原地图被修改。
        if (!this.check_connectivity(copy_g, this.rows - 2, 1, 1, this.cols - 2)) 
            return false;
        
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                if (g[r][c] == true) {
                    this.walls.push(new Wall(r,c,this));
                }
            }
        }
        return true;
    }

    start() {
        //this.update_size();
        //   尝试创建地图，在1000次尝试过程中，出现合法地图则停止。
        for (let i = 0; i < 1000; i++)
            if (this.create_walls()) 
                break;
    }

    update_size() {
        this.L = parseInt(Math.min(this.parent.clientWidth/ this.cols, this.parent.clientHeight / this.rows)); //墙的格子之间有缝是因为有float，所以用parseInt取整
        this.ctx.canvas.width = this.cols * this.L;
        this.ctx.canvas.height = this.rows * this.L;
    }

    update() {
        this.update_size(); //更新格子大小
        this.render();
    }

    render() { // 画地图背景
        const color_even = "#AAD751", color_odd = "#A2D149";
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                if ((r+c) % 2 == 0) {
                    this.ctx.fillStyle = color_even;
                } else {
                    this.ctx.fillStyle = color_odd;
                }
                this.ctx.fillRect(c * this.L, r * this.L, this.L, this.L); /* 数组坐标系往下是行往右是列，canvas坐标系横是x纵是y */
            }
        }
    }
}