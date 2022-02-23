import {readJson} from './index'

export default (req, res) => {
    // 获取api路由中的参数
    const id = req.query.taskId;
    const data = readJson('task.json');
    let task = {}
    const tasks  = data.filter(task=>{
        return task.id === id;
    })
    if(tasks.length>0){
        task = tasks[0];
    }
    res.status(200).json(task)
  }
  