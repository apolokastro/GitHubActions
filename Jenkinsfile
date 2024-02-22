pipeline{
    agent any

    parameters{
        string(name: "SPEC", defaultValue: "cypress/e2e/**/**", description: "test")
        choice(name: "BROWSER", choices: ['chrome', 'edge'], descriptiom: "otro test")
    }

    options{
        ansiColor('xterm');
    }

    stages{
        stage('Build'){
            steps{
                echo "Building action"
            }
        }

        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }

        stage('Deploy'){
            echo "Deploying"
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}