### 本群总则 挑战一下
1.  53题 最大子序和 https://leetcode-cn.com/problems/maximum-subarray/
2.  58题 最后一个单词的长度 https://leetcode-cn.com/problems/length-of-last-word/
3.  05题 替换空格 https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
4.  206题 https://leetcode-cn.com/problems/reverse-linked-list/
5.  92题 https://leetcode-cn.com/problems/reverse-linked-list-ii/
6.  24题 https://leetcode-cn.com/problems/swap-nodes-in-pairs/
欢迎挑战

### 打卡刷题策略
* **强调: config下的user-list.json不能随意修改，这文件是我们同学的通过命令自动生成。**
* 题目由群内委员会来发放，一周发三题。
* 通过提交github来完成作业，委员会值班员会通过gulp任务扫描提交时间来判断是否在打卡时间内成功打卡。  
* 名词定义：  
    * github-name: github账号用户名，用于申请开发者
    * username: 项目git配置的anthor，用于生成打卡记录，查看方法：进入项目，在终端输入git config user.name
    * nickname: 微信昵称，用于识别身份
* 具体方法如下： 
    * 先clone[作业项目](git@github.com:kaeryehaowan/code-war.git),并申请成为开发者。
<<<<<<< HEAD
    * 在项目root/answer/下建立自己的个人文件夹，后续完成作业均在个人文件夹内完成。文件夹名称需要跟群昵称相同，否则无法正确统计打卡签到记录。
    * 后续委员会成员会发送题到个人文件夹中，请在发放题目后git fetch。拿到题目后，做完请记得提交push。

### 开发指南
* git config --local user.name 'username' 修改git username
* npm i  安装comimitlint插件
* git commit -m 'answer: 01-xxx'  提交最终解题内容的commit格式，其它无关紧要的提交请用 chore: xxxx
    * 在项目root/answer下建立自己的个人文件夹，后续完成作业均在个人文件夹内完成。文件夹名称需要跟群昵称相同，否则无法正确统计打卡签到记录。
    * 后续委员会成员会发送题到个人文件夹中，请在发放题目后git fetch。拿到题目后，做完请记得提交push。
=======
    * npm i
    * gulp createDir --微信昵称 , 强制输入微信昵称
    * 后续委员会成员会发送题到个人文件夹中，请在发放题目后git fetch。拿到题目后，请在dev分支开发，做完请记得提交push。提交最终解题内容时，commitlint-title请用answer，如： git commit -m 'answer: 01-xxx', 01是题号, 请严格按照些格式提交, 其它提交可以用chore等。其它commitlint-title类型如下
    ```json
    /**
    * answer：解题
    * chore：日常
    * config：配置，架构
    * arrange：发放题目
    * log：收集打卡日志
    */
    ```
>>>>>>> dev
