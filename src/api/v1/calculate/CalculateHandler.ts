import Calculator from "../../../Calculator";

export default class CalculateHandler {
    public handle(params: any) {
        if (!params.operation || !params.arg1 || !params.arg2) {
            return 'Wrong parameters for calculation';
        }
        try {
            // @ts-ignore
            return Calculator[params.operation](params.arg1, params.arg2);

        } catch (e) {
            return 'Error when calculating'
        }
    }
}
