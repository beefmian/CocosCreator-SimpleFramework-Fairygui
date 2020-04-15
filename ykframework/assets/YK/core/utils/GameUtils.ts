export class GameUtils {

    // 向量夹角
    static Angle(ma, mb) {

        let v1 = (ma.x * mb.x) + (ma.y * mb.y) + (ma.z * mb.z);
        let ma_val = Math.sqrt(ma.x * ma.x + ma.y * ma.y + ma.z * ma.z);
        let mb_val = Math.sqrt(mb.x * mb.x + mb.y * mb.y + mb.z * mb.z);
        let cosM = v1 / (ma_val * mb_val);
        let angleAMB = Math.acos(cosM) * 180 / Math.PI;

        return angleAMB;
    }


    public static clamp(value: number, min: number, max: number): number {
        if (value < min)
            value = min;
        else if (value > max)
            value = max;
        return value;
    }

    public static random(m, n): number {
        let num = Math.floor(Math.random() * (m - n) + n);
        return num;
    }
}
