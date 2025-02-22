import { _decorator, Component, UITransform, v2, v3 } from 'cc';
const { ccclass, property } = _decorator;

// /**
//  * 未完成
//  */

@ccclass('CloseToBorderComponent')
export default class CloseToBorderComponent extends Component {
    @property({
        tooltip: "是否紧贴下方，不能和紧贴上方同时使用"
    })
    closeToBottom: boolean = false;
    @property({
        tooltip: "距离下方的距离（px），开启紧贴下方时使用"
    })
    marginBottomInPx: number = 0;
    //    // @property({
    //    //     tooltip: "是否紧贴上方，不能和紧贴下方同时使用"
    //    // })
    //    // closeToTop: boolean = false;
    onLoad() {
        //        // 计算本节点在父节点下，贴底边时的坐标，需要特别注意处理锚点
        if (this.closeToBottom) {
            this.node.position = v3(
                this.node.position.x,
                -this.node.parent.getComponent(UITransform).height / 2 + this.node.getComponent(UITransform).anchorX * this.node.getComponent(UITransform).height + this.marginBottomInPx
            );
        }
    }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator;
// 
// /**
//  * 未完成
//  */
// @ccclass
// export default class CloseToBorderComponent extends cc.Component {
//     @property({
//         tooltip: "是否紧贴下方，不能和紧贴上方同时使用"
//     })
//     closeToBottom: boolean = false;
// 
//     @property({
//         tooltip: "距离下方的距离（px），开启紧贴下方时使用"
//     })
//     marginBottomInPx: number = 0;
// 
//     // @property({
//     //     tooltip: "是否紧贴上方，不能和紧贴下方同时使用"
//     // })
//     // closeToTop: boolean = false;
// 
//     onLoad() {
//         // 计算本节点在父节点下，贴底边时的坐标，需要特别注意处理锚点
//         if (this.closeToBottom) {
//             this.node.position = cc.v2(
//                 this.node.position.x,
//                 -this.node.parent.getComponent(UITransform).height / 2 + this.node.anchorY * this.node.getComponent(UITransform).height + this.marginBottomInPx
//             );
//         }
//     }
// }
