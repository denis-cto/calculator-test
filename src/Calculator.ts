
export default class Calculator {
    private static checkIsFinite(x: any) {
        if (!isFinite(x)) {
            throw new Error('X is not a number');
        }
    }

    private static convertStringToNumber(x: string | number): number {
        if (typeof x === "string") {
            return  parseFloat(x);
        }
        return x;
    }

    public static add(x: number | string, y: number| string): number {
        const _x = this.convertStringToNumber(x);
        const _y = this.convertStringToNumber(y);
        this.checkIsFinite(_x);
        this.checkIsFinite(_y);

        return _x + _y;
    }
    public static minus(x: number | string, y: number| string): number {
        const _x = this.convertStringToNumber(x);
        const _y = this.convertStringToNumber(y);
        this.checkIsFinite(_x);
        this.checkIsFinite(_y);

        return _x - _y;
    }
    public static divide(x: number | string, y: number| string): number {
        const _x = this.convertStringToNumber(x);
        const _y = this.convertStringToNumber(y);
        this.checkIsFinite(_x);
        this.checkIsFinite(_y);

        return _x / _y;
    }
    public static multiply(x: number | string, y: number| string): number {
        const _x = this.convertStringToNumber(x);
        const _y = this.convertStringToNumber(y);
        this.checkIsFinite(_x);
        this.checkIsFinite(_y);

        return _x * _y;
    }

}
