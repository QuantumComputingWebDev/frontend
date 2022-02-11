module.exports = {
    apps: [
        {
            name: 'frontend',
            script: 'sudo serve -s build -l 80',
            instances: 'max',
            exec_mode: 'cluster'
        }
    ]
}
