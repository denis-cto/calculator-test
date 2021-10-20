import Calculator from "../../../Calculator";

export default class CalculateHandler {
    public handle(params: any) {

        if (!params.operation || !params.arg1 || !params.arg2) {
            throw new Error('Wrong parameters for calculation');
        }
        // @ts-ignore
        const result =  Calculator[params.operation](params.arg1, params.arg2);
        return result;
    }
}
