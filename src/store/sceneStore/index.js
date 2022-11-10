import { $ } from "../../util/utils";
import { observable, action, makeObservable } from "mobx";
// import makeObservable from "mobx";

class SceneStore {
  constructor() {
    makeObservable(this);
  }

  @observable sceneContainer = null;
  // @observable 创建一个可响应的变量，注意这里并不是原始变量


  // @action 这其实就是redux中的action，据说老版本中mobx是直接修改state的，听起来就非常不安全。但是新版改善了
  @action
  getSceneContainer() {
    this.sceneContainer = $('#scene');
  }
}

const sceneStore = new SceneStore();

export default sceneStore;