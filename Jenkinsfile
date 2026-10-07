pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                deleteDir()
                sh '''
                git clone https://github.com/muhammedshamil-png/newwwwwww.git
                ls -l
                '''
            }
        }
        stage('deploy'){
            steps{
                sh '''
                cp -r newwwwwww/* /var/www/html
                ls -l /var/www/html
                '''
                
            }
        }
    }
}
