const AC_GAME_OBJECTS = [];

export class AcGameObject {
    constructor() {
        AC_GAME_OBJECTS.push(this); //每创建一个AcGameObject对象，就将其添加到AC_GAME_OBJECTS数组中，先来被后到的覆盖(wall覆盖地图格子)
        this.timedelta = 0; // 记录上一帧到当前帧的时间间隔
        this.has_called_start = false; // 标记是否已经调用过start方法
    }

    start() { // called when the object is added to the game

    }

    update() { // called every frame
        
    }

    on_destroy() { // called before the object is removed from the game

    }

    destroy() { // called when the object is removed from the game
        this.on_destroy();

        for (let i in AC_GAME_OBJECTS) { // in是遍历数组的索引（下标），而不是数组的值
            const obj = AC_GAME_OBJECTS[i];
            if (obj === this) {
                AC_GAME_OBJECTS.splice(i, 1);
                break;
            }
        }
    }
}

let last_timestamp;
const step = timestamp => {
    for (let obj of AC_GAME_OBJECTS) { // for...of 遍历数组里的值
        if (!obj.has_called_start) {
            obj.start();
            obj.has_called_start = true;
        } else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }

    last_timestamp = timestamp;
    requestAnimationFrame(step)
}

requestAnimationFrame(step)