1.  backend
    1. 테스트(개발 모드)
        eclipse ctrl+F11 (springboot application execute)
    
    2. build(배포)
        # mvn -f emaillist/backend exec:exec clean package

    3. 빌드(서버배포) 테스트
        # java -Dspring.profiles.active=production -jar emaillist/backend/target/emaillist.jar