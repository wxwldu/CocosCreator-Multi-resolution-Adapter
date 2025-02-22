import { _decorator, Component, ProgressBar, Label, Node, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ContentWithAnimScene')
export default class ContentWithAnimScene extends Component {
    @property(ProgressBar)
    progressBar: ProgressBar | null = null;
    @property(Label)
    progressLabel: Label | null = null;
    @property(Node)
    closeToLeftNode: Node | null = null;
    @property(Node)
    closeToTopNode: Node | null = null;
    @property(Node)
    closeToRightNode: Node | null = null;
    @property(Node)
    closeToBottomNode: Node | null = null;
    private _isShowed = true;
    private _closeToLeftNodeShowPos: Vec2 | null = null;
    private _closeToLeftNodeHidePos: Vec2 | null = null;
    private _closeToTopNodeShowPos: Vec2 | null = null;
    private _closeToTopNodeHidePos: Vec2 | null = null;
    private _closeToRightNodeShowPos: Vec2 | null = null;
    private _closeToRightNodeHidePos: Vec2 | null = null;
    private _closeToBottomNodeShowPos: Vec2 | null = null;
    private _closeToBottomNodeHidePos: Vec2 | null = null;
    start() {
       // 记录显示和隐藏的位置
        this.closeToLeftNode.getComponent(cc.Widget).updateAlignment()
        this._closeToLeftNodeShowPos = this.closeToLeftNode.position;
        this._closeToLeftNodeHidePos = this.closeToLeftNode.position.sub(cc.v2(this.closeToLeftNode.getComponent(UITransform).width, 0));

        this.closeToTopNode.getComponent(cc.Widget).updateAlignment()
        this._closeToTopNodeShowPos = this.closeToTopNode.position;
        this._closeToTopNodeHidePos = this.closeToTopNode.position.add(cc.v2(0, this.closeToTopNode.getComponent(UITransform).height));

        this.closeToRightNode.getComponent(cc.Widget).updateAlignment()
        this._closeToRightNodeShowPos = this.closeToRightNode.position;
        this._closeToRightNodeHidePos = this.closeToRightNode.position.add(cc.v2(this.closeToRightNode.getComponent(UITransform).width, 0));

        this.closeToBottomNode.getComponent(cc.Widget).updateAlignment()
        this._closeToBottomNodeShowPos = this.closeToBottomNode.position;
        this._closeToBottomNodeHidePos = this.closeToBottomNode.position.sub(cc.v2(0, this.closeToBottomNode.getComponent(UITransform).height));

       // 设置无限循环加载进度条
        this.progressBar.totalLength = this.progressBar.node.getComponent(UITransform).width;
        this.progressBar.progress = 0;
        this.schedule(() => {
        if (this.progressBar.progress > 1) {
        this.progressBar.progress = 0;
        }
        this.progressBar.progress = this.progressBar.progress + 0.01;
        this.progressLabel.string = `正在加载 ${Math.floor(this.progressBar.progress * 100)}%`;
        }, 0.1);
    }
//    /**
//     * 屏幕点击之后出现/隐藏上下左右4个贴边道具栏
//     */
    onClick() {
        this._handleNodeShowOrHide(this.closeToLeftNode, this._closeToLeftNodeShowPos, this._closeToLeftNodeHidePos);
        this._handleNodeShowOrHide(this.closeToTopNode, this._closeToTopNodeShowPos, this._closeToTopNodeHidePos);
        this._handleNodeShowOrHide(this.closeToRightNode, this._closeToRightNodeShowPos, this._closeToRightNodeHidePos);
        this._handleNodeShowOrHide(this.closeToBottomNode, this._closeToBottomNodeShowPos, this._closeToBottomNodeHidePos);
        this._isShowed = !this._isShowed;
    }
    _handleNodeShowOrHide(targetNode: cc.Node, showPos: Vec2, hidePos: Vec2) {
        targetNode.stopAllActions();
        if (this._isShowed) {
        targetNode.runAction(cc.moveTo(0.32, hidePos).easing(cc.easeCircleActionOut()));
        } else {
        targetNode.runAction(cc.moveTo(0.32, showPos).easing(cc.easeCircleActionOut()));
        }
    }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator;
// 
// @ccclass
// export default class ContentWithAnimScene extends cc.Component {
//     @property(cc.ProgressBar)
//     progressBar: cc.ProgressBar = null;
// 
//     @property(cc.Label)
//     progressLabel: cc.Label = null;
// 
//     @property(cc.Node)
//     closeToLeftNode: cc.Node = null;
// 
//     @property(cc.Node)
//     closeToTopNode: cc.Node = null;
// 
//     @property(cc.Node)
//     closeToRightNode: cc.Node = null;
// 
//     @property(cc.Node)
//     closeToBottomNode: cc.Node = null;
// 
//     private _isShowed = true;
// 
//     private _closeToLeftNodeShowPos: cc.Vec2 = null;
// 
//     private _closeToLeftNodeHidePos: cc.Vec2 = null;
// 
//     private _closeToTopNodeShowPos: cc.Vec2 = null;
// 
//     private _closeToTopNodeHidePos: cc.Vec2 = null;
// 
//     private _closeToRightNodeShowPos: cc.Vec2 = null;
// 
//     private _closeToRightNodeHidePos: cc.Vec2 = null;
// 
//     private _closeToBottomNodeShowPos: cc.Vec2 = null;
// 
//     private _closeToBottomNodeHidePos: cc.Vec2 = null;
// 
//     start() {
//         // 记录显示和隐藏的位置
//         this.closeToLeftNode.getComponent(cc.Widget).updateAlignment()
//         this._closeToLeftNodeShowPos = this.closeToLeftNode.position;
//         this._closeToLeftNodeHidePos = this.closeToLeftNode.position.sub(cc.v2(this.closeToLeftNode.getComponent(UITransform).width, 0));
// 
//         this.closeToTopNode.getComponent(cc.Widget).updateAlignment()
//         this._closeToTopNodeShowPos = this.closeToTopNode.position;
//         this._closeToTopNodeHidePos = this.closeToTopNode.position.add(cc.v2(0, this.closeToTopNode.getComponent(UITransform).height));
// 
//         this.closeToRightNode.getComponent(cc.Widget).updateAlignment()
//         this._closeToRightNodeShowPos = this.closeToRightNode.position;
//         this._closeToRightNodeHidePos = this.closeToRightNode.position.add(cc.v2(this.closeToRightNode.getComponent(UITransform).width, 0));
// 
//         this.closeToBottomNode.getComponent(cc.Widget).updateAlignment()
//         this._closeToBottomNodeShowPos = this.closeToBottomNode.position;
//         this._closeToBottomNodeHidePos = this.closeToBottomNode.position.sub(cc.v2(0, this.closeToBottomNode.getComponent(UITransform).height));
// 
//         // 设置无限循环加载进度条
//         this.progressBar.totalLength = this.progressBar.node.getComponent(UITransform).width;
//         this.progressBar.progress = 0;
//         this.schedule(() => {
//             if (this.progressBar.progress > 1) {
//                 this.progressBar.progress = 0;
//             }
//             this.progressBar.progress = this.progressBar.progress + 0.01;
//             this.progressLabel.string = `正在加载 ${Math.floor(this.progressBar.progress * 100)}%`;
//         }, 0.1);
//     }
// 
//     /**
//      * 屏幕点击之后出现/隐藏上下左右4个贴边道具栏
//      */
//     onClick() {
//         this._handleNodeShowOrHide(this.closeToLeftNode, this._closeToLeftNodeShowPos, this._closeToLeftNodeHidePos);
//         this._handleNodeShowOrHide(this.closeToTopNode, this._closeToTopNodeShowPos, this._closeToTopNodeHidePos);
//         this._handleNodeShowOrHide(this.closeToRightNode, this._closeToRightNodeShowPos, this._closeToRightNodeHidePos);
//         this._handleNodeShowOrHide(this.closeToBottomNode, this._closeToBottomNodeShowPos, this._closeToBottomNodeHidePos);
//         this._isShowed = !this._isShowed;
//     }
// 
//     _handleNodeShowOrHide(targetNode: cc.Node, showPos: cc.Vec2, hidePos: cc.Vec2) {
//         targetNode.stopAllActions();
//         if (this._isShowed) {
//             targetNode.runAction(cc.moveTo(0.32, hidePos).easing(cc.easeCircleActionOut()));
//         } else {
//             targetNode.runAction(cc.moveTo(0.32, showPos).easing(cc.easeCircleActionOut()));
//         }
//     }
// }
