import DeliveryStateVO from "../../../core/vos/DeliveryStateVO";
export default class DeliveryStateGenerator {
    static getState(status: "상품준비중" | "상품인수" | "배달출발" | "배달완료" | "상품이동중"): DeliveryStateVO;
}
