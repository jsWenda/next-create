import fs from 'fs';
import path from 'path';
import { sortBy } from 'lodash';

function getFilePath(fileName){
   return path.join(process.cwd(),'data',fileName);
}

export function readJson(fileName){
   const filePath = getFilePath(fileName);
   const fileData = fs.readFileSync(filePath);
   const data = JSON.parse(fileData);
   console.log(data)
   return data;
}  

function wirteJson(fileName, data){
    const filePath = getFilePath(fileName);
    fs.writeFileSync(filePath,JSON.stringify(data))
}

function handle(req,res){
   const fileName = 'task.json';
   let status = 200;
   let data = readJson(fileName);
   let message = '操作成功';
   // 查询
    if (req.method === 'GET') {
        res.status(status).json({ data, message });
    } else if(req.method === 'POST'){
        // 增加
        let taskObj = req.body;
        taskObj.id = new Date().getTime().toString();
        data.push(taskObj);
        wirteJson(fileName,sortBy(data, 'id'));
        res.status(status).json({ taskObj, message });
    } else if(req.method === 'PUT'){
        // 修改
        let taskObj = req.body;
        const result = data.filter(task=>{
            return task.id !== taskObj.id;
        });
        result.push(taskObj);
        wirteJson(fileName,result);
        res.status(status).json({ taskObj, message });
    } else if(req.method === 'DELETE'){
        // 删除
        let taskObj = req.body;
        const result = data.filter(task=>{
            return task.id !== taskObj.id;
        });
        wirteJson(fileName,result);
        res.status(status).json({ message });
    }
}

export default handle;