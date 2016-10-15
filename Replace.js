//Trocar linhas...

        quizReportingData: {
            ISRUnknownErrorStr: 'Enviado com sucesso!',
            ISRNoConnectionErrorStr: 'Sem conexão, verifique!',
            ISRWrongURLErrorStr: 'URL incorreto, contate um analista!',
            ISRLoginErrorStr: 'Login ou senha incorreto(a)',
            ISRConnectingStr: 'Conectando',
            ISRResultPostedStr: 'Resultados postados com êxito',
            ISRPostResultStr: 'Postar resultados',
            ISRResultCalculatedStr: 'Para enviar o resultado, basta informar o Nome e Empresa!',
            ISREnterNameStr: 'Insira seu nome:',
            ISREmailIDStr: 'Insira a Empresa:',
            ISRSendStr: 'Enviar',
            ISRStatusStr: 'Mensagem de status',
            ISRErrorStr: 'Mensagem de status de erro',
            ISROkStr: 'OK',
            lWriteDebugInfo: false,
            lmsType: 9,
            sendScoreAsPercent: true,
            trackingLevel: 0,
            slideViewPercentage: 100,
            reportingOption: 2,
            slideViewsForSuccess: 100,
            slideViewsTypeForSuccess: 0,
            slideViewsForCompletion: 100,
            slideViewsTypeForCompletion: 0,
            quizCriteriaForCompletion: 0,
            quizCriteriaForSuccess: 0,
            completionCriteria: 2,
            successCriteria: 2,
            internalServerURL: 'http://200.195.131.180/captivate/internalServerReporting.php',
            companyName: 'Inside Sistemas',
            departmentName: 'Suporte', //Alterar linha - Nome do Departamento
            courseName: 'Avaliacao', //Alterar linha - Nome do Curso
            courseNode: '',
            isTrackedFlag: true,
            trackingUrlEncodeVersionAndSession: 1,
            commitDataOnEverySlide: true,
            trackingSendResumeData: true,
            cmiExitNormalAfterCompletion: false,
            lmsInitializationString: 'cp.movie.playbackController.SetLMSType();cp.movie.playbackController.SetSendScoreAsPercent();cp.movie.playbackController.SetTrackingLevel();cp.movie.playbackController.SetSlideViewPercentage();cp.movie.playbackController.SetReportingOption();cp.movie.playbackController.SetSlideViewsForSuccess();cp.movie.playbackController.SetSlideViewsForCompletion();cp.movie.playbackController.SetQuizCriteriaForCompletion();cp.movie.playbackController.SetQuizCriteriaForSuccess();cp.movie.playbackController.SetCompletionCriteria();cp.movie.playbackController.SetSuccessCriteria();cp.movie.playbackController.SetInternalServerURL();cp.movie.playbackController.SetDirectory();cp.movie.playbackController.SetCourseNode();cp.movie.playbackController.SetIsTrackedFlag();cp.movie.playbackController.SetTrackingUrlEncodeVersionAndSession();cp.movie.playbackController.SetCommitDataOnEverySlide();cp.movie.playbackController.SetTrackingSendResumeData();cp.movie.playbackController.SetCmiExitNormalAfterCompletion();'
        },
        
        
                rtDialog: {
            rtbgfc: '#ebebeb',
            rtbgsc: '#4d4d4d',
            rtbtnfc: '#676767',
            rtbtnsc: '#676767',
            rtsc: '#4d4d4d',
            rttc: '#4d4d4d',
            rttsc: '#ffffff',
            rtfn: 'TrebuchetMS',
            rtt: 'Enviar tudo',
            rtsam: 'Você respondeu todas as perguntas. O que deseja fazer a seguir?',
            rtiqm: 'Uma ou mais perguntas estão incompletas. Responda todas as perguntas para continuar.',
            rtsiqm: 'Você ainda não respondeu algumas perguntas. Tem certeza de que deseja prosseguir sem respondê-las?',
            rtsanym: 'Você chegou ao fim do quiz, mas tem perguntas não respondidas. O que deseja fazer?',
            rtmtqm: 'Responda pelo menos uma pergunta para continuar.',
            rtokb: 'OK',
            rtcb: 'CANCELAR',
            rtyb: 'SIM',
            rtnb: 'NÃO',
            rtsab: 'Enviar todas as respostas',
            rtsanyb: 'Enviar mesmo assim',
            rtrtqb: 'Retornar ao quiz',
            rtWarningTitle: 'Inside Ensina', //Alterar linha, titulo da janela
            rtUnsupportedBowser: 'Este navegador não oferece suporte à parte do conteúdo do arquivo que você está tentando exibir. Use um dos seguintes navegadores:<ul><li>Internet Explorer 9 ou posterior</li><li>Safari 5.1 ou posterior</li><li>Google Chrome 17 ou posterior</li></ul>Firefox @FFVERSION ou posterior</li></ul>'
        },
        
        
        cp.InternalServerAdapter.prototype.SendDataToURL = function() {
    if (!this.m_StudentName || "" == this.m_StudentName) this.m_StudentName = this.m_StudentID;
    if (!this.m_StudentID || "" == this.m_StudentID) this.m_StudentID = this.m_StudentName;
    this.m_resultXML += '<CompanyName value="' + cp.movie.playbackController.m_companyName + '"/>\r\t';
    this.m_resultXML += '<DepartmentName value="' + cp.movie.playbackController.m_departmentName + '"/>\r\t';
    this.m_resultXML += '<CourseName value="' + cp.movie.playbackController.m_courseName + '"/>\r\t';
    this.m_resultXML += '<LearnerName value="' + this.m_StudentName + '"/>\r\t';
    this.m_resultXML += '<LearnerID value="' + this.m_StudentID + '"/>\r\t';
    var a = cpInfoProjectName;
    "" == a && (a = cp.D.project.pN);
    this.m_resultXML += '<LessonName value="' + a + '"/>\r\t';
    this.m_resultXML += '<QuizAttempts value="' + cpQuizInfoAttempts + '"/>\r\t';
    this.m_resultXML += '<TotalQuestions value="' + cpQuizInfoTotalQuestionsPerProject + '"/>\r\t';
    0 < this.m_adapterReportingVariables.length && (this.m_resultXML += this.BuildReportingVariablesXML());
    this.m_resultXML +=
        this.BuildResultXML();
    this.m_resultXML += "</Course>";
    this.PostNormalRequest(this.m_resultXML, a + " - " + this.m_StudentID + " - " + this.m_StudentName + ".xml")
};
cp.InternalServerAdapter.prototype.PostNormalRequest = function(a, b) {
    var c = new XMLHttpRequest,
        d = cp.movie.playbackController.m_internalServerURL,
        e;
    e = "CompanyName=" + cp.movie.playbackController.m_companyName;
    e += "&DepartmentName=" + cp.movie.playbackController.m_departmentName;
    e += "&CourseName=" + cp.movie.playbackController.m_courseName;
    e = e + ("&Filename=" + b) + ("&Filedata=" + escape(a));
    try {
        c.open("POST", d, !1);
        c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var f = this;
        c.onreadystatechange =
            function() {
                4 == c.readyState && 200 == c.status ? (f.m_resultsAlreadyPosted = !0, f.ShowResultDialog(!0)) : f.ShowResultDialog(!1)
            };
        c.send(e)
    } catch (g) {
        this.ShowResultDialog(!1)
    }
};
cp.InternalServerAdapter.prototype.BuildXMLRootNode = function() {
    return escape("")
};
cp.InternalServerAdapter.prototype.BuildReportingVariablesXML = function() {
    for (var a = "<Variables>\r\t", b = this.m_adapterReportingVariables.length, c = 0; c < b; ++c) {
        var d = this.m_adapterReportingVariables[c];
        d && "" != d && (a += "<" + d + ' value="' + m_VarHandle[d] + '"/>\r\t')
    }
    return a + "</Variables>\r\t"
};
cp.InternalServerAdapter.prototype.BuildResultXML = function() {
    var a;
    a = "<Result>\r\t" + this.BuildResultXMLBodyCore();
    a += this.BuildResultXMLBodyInteraction();
    return a + "</Result>\r\t"
};
cp.InternalServerAdapter.prototype.BuildResultXMLBodyCore = function() {
    var a;
    a = "<CoreData>\r\t" + ('<Status value="' + this.GetLessonStatus() + '"/>\r\t');
    a += '<Location value="' + this.GetLessonLocation() + '"/>\r\t';
    this.m_sendScoreAsPercent ? a += '<Score value="' + this.GetScore(this.m_sendScoreAsPercent) + '"/>\r\t' : (a += '<RawScore value="' + this.GetScoreRaw() + '"/>\r\t', a += '<MaxScore value="' + this.GetScoreMax() + '"/>\r\t', a += '<MinScore value="' + this.GetScoreMin() + '"/>\r\t');
    a += '<SessionTime value="' + this.GetTimeInSession() +
        '"/>\r\t';
    return a + "</CoreData>\r\t"
};
cp.InternalServerAdapter.prototype.BuildResultXMLBodyInteraction = function() {
    var a = "<InteractionData>\r\t";
    if (this.IsInteractionDataTracked() && 0 < this.m_interaction_ary.length)
        for (var b = 0; b < this.m_interaction_ary.length; b++) a += this.BuildInteractionsNode(b);
    return a + "</InteractionData>\r\t"
};
cp.InternalServerAdapter.prototype.BuildInteractionsNode = function(a) {
    var b;
    b = "<Interactions>\r\t" + ('<Date value="' + this.m_interaction_ary[a].date_str + '"/>\r\t');
    b += '<InteractionTime value="' + this.m_interaction_ary[a].time_str + '"/>\r\t';
    b += '<InteractionID value="' + this.m_interaction_ary[a].interactionID_str + '"/>\r\t';
    b += '<ObjectiveID value="' + this.m_interaction_ary[a].objectiveID_str + '"/>\r\t';
    b += '<InteractionType value="' + this.m_interaction_ary[a].type_str + '"/>\r\t';
    b += '<CorrectResponse value="' +
        this.m_interaction_ary[a].correctResponse_str + '"/>\r\t';
    b += '<StudentResponse value="' + this.m_interaction_ary[a].studentResponse_str + '"/>\r\t';
    b += '<Result value="' + this.m_interaction_ary[a].result_str + '"/>\r\t';
    b += '<Weight value="' + this.m_interaction_ary[a].weight_int + '"/>\r\t';
    b += '<Latency value="' + this.m_interaction_ary[a].latency_str + '"/>\r\t';
    b += '<Attempt value="' + this.m_interaction_ary[a].currentAttempt + '"/>\r\t';
    return b + "</Interactions>\r\t"
};

cp.RuntimeMessageBox = function(a, b, c, d, e, f, g, h, i, j) {
    this.m_parent = a;
    this.m_MessageBoxElement = void 0;
    this.m_id = "CPRuntimeMsgBox_ID";
    this.m_titleText = "Inside Ensina";
    this.m_messageText = "This is Adobe Captivate Run Time Message Dialog";
    this.m_firstButtonText = "OK";
    this.m_secondButtonText = "CANCEL";
    this.m_ChkBoxText = "Don't ask me again";
    this.m_numberOfButtons = b;
    this.m_secondButtonHandler = this.m_firstButtonHandler = void 0;
    this.m_DontAskMe = !1;
    this.m_foregroundFillColor = c;
    this.m_foregroundStrokeColor = d;
    this.m_buttonFillColor =
        e;
    this.m_buttonStrokeColor = f;
    this.m_separatorColor = g;
    this.m_textColor = h;
    this.m_textShadowColor = i;
    this.m_textFontName = j;
    this.TITLE_DEFAULT_TOP_OFFSET = this.MESSAGE_DEFAULT_LEFT_OFFSET = this.SEPARATOR_DEFAULT_LEFT_OFFSET = this.TITLE_DEFAULT_LEFT_OFFSET = 10;
    this.SEPARATOR_DEFAULT_TOP_OFFSET = 20;
    this.MESSAGE_DEFAULT_TOP_OFFSET = 30;
    this.BUTTON_BOTTOM_OFFSET = 10;
    this.BG_DEFAULT_WIDTH = 493;
    this.BG_DEFAULT_HEIGHT = 219;
    this.FG_DEFAULT_WIDTH = 478;
    this.FG_DEFAULT_HEIGHT = 198;
    this.BUTTON_DEFAULT_WIDTH = 100;
    this.BUTTON_DEFAULT_HEIGHT =
        33;
    this.INTER_BUTTON_OFFSET = 15
};
