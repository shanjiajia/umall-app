import { Toast, Modal } from 'antd-mobile';
export const successAlert=(msg)=>{
    Toast.info(msg, 2)
}
export const confirmAlert = (fn) => {
    Modal.alert('删除提示', '你确定要删除吗？', [
        { text: '取消', onPress: () => console.log('cancel') },
        { text: '删除', onPress: () => { fn() } }
    ]
    )
}