import { put, fork, takeLeading } from "redux-saga/effects";
import { SandboxActionsType } from "modules/feature/Sandbox/actions/SandboxActions";

function* setItemDone(action: any) {

}

function* watchSandboxSaga(){
    yield takeLeading(SandboxActionsType.INIT, setItemDone);
}

const sandboxSaga = fork(watchSandboxSaga);
export default sandboxSaga;