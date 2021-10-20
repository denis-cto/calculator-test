import Calculator from "./Calculator";

export default class ExtendedCalculator extends Calculator{

    public static pow(x: number | string, y: number| string): number {
        const _x = this.convertStringToNumber(x);
        const _y = this.convertStringToNumber(y);
        this.checkIsFinite(_x);
        this.checkIsFinite(_y);

        return Math.pow(_x ,_y);
    }

}
