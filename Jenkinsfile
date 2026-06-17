pipeline{
	agent any
	stages {
		stage('checkout') {
			steps{
				checkout scm
			}
		}
		stage('build') {
			steps{
				echo "building .."
				sh "node --version"
			}
		}

		stage('test') {
			steps{
				echo'Test passed!'
			}
		
		}
		stage('deploy') {

			steps{
				sh 'docker build -t jekins-demo .'
				echo 'deployed!'

			}
		}
	}
	
	post{
		success { echo "success" }
		failure {echo "failed" }
	
	}

}
