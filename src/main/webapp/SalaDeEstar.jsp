
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
    <head>
        <title>Sala de Estar</title>
        <link rel="stylesheet" href="${pageContext.request.contextPath}/content/style.css">
    </head>
    <body>
        <div class="background-image">
            <img src="content/img/broken-toys-graded-0025-mov-2301005-high_0004.png">
            <p id="mensagensCodigo"></p>
            <audio  autoplay loop id="audioChiado">
                <source src="${pageContext.request.contextPath}/content/audio/estaticaTV.mp3" type="audio/mpeg">
            </audio>
            <audio id="audioResposta">
                <source src="${pageContext.request.contextPath}/content/audio/glitch.mp3" type="audio/mpeg">
            </audio>

        </div>

        <script src="${pageContext.request.contextPath}/content/script.js"></script>
    </body>
</html>
