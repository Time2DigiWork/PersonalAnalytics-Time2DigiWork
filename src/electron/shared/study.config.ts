import { StudyConfiguration } from './StudyConfiguration';
import { DataExportFormat } from './DataExportFormat.enum';

const studyConfig: StudyConfiguration = {
  name: 'Time2DigiWork',
  shortDescription:
    'Diese verhaltensbasierte Studie untersucht, wie digitale Tools und KI-Systeme im akademischen Arbeitsalltag genutzt werden. Ziel ist es, ein realistisches Bild davon zu erhalten, in welchem Ausmass digitale Tools und KI eingesetzt werden und welchen Einfluss digitale Tools und KI-Systeme auf Effizienz und Arbeitsbelastung haben.',
  infoUrl: 'https://www.zhaw.ch/de/forschung/projekt/80606',
  privacyPolicyUrl: 'https://github.com/Time2DigiWork/PersonalAnalytics-Time2DigiWork/blob/dev/documentation/PRIVACY.md',
  uploadUrl: '',
  contactName: 'Dr. Nicoline Scheidegger',
  contactEmail: 'Time2DigiWork@zhaw.ch',
  subjectIdLength: 6,
  dataExportEnabled: true,
  dataExportFormat: DataExportFormat.ExportToDDL,
  dataExportDDLProjectName: "PA_Time2DigiWork",
  dataExportEncrypted: false,
  displayDaysParticipated: true,
  showActiveTimesInOnboarding: true,
  enableRetrospection: true,
  trackers: {
    enabledWorkHours: true,
    windowActivityTracker: {
      name: 'Window Activity Monitor',
      enabled: true,
      intervalInMs: 1000,
      trackUrls: false,
      trackWindowTitles: true
    },
    userInputTracker: {
      name: 'User Input Monitor',
      enabled: true,
      intervalInMs: 60000,
      collectKeyDetails: false
    },
    experienceSamplingTracker: {
      name: 'Experience Sampling',
      enabled: true,
      questions: [
        {
          question: 'Seit der letzten Abfrage konnte ich konzentriert an einer Sache arbeiten.',
          answerType: 'LikertScale',
          scale: 7,
          responseOptions: ['stimme überhaupt nicht zu', 'teils-teils', 'stimme voll und ganz zu']
        },
        {
          question: 'Seit der letzten Abfrage wurde meine Aufmerksamkeit vor allem durch eingehende Anfragen, Nachrichten oder Unterbrechungen gesteuert.',
          answerType: 'LikertScale',
          scale: 7,
          responseOptions: ['stimme überhaupt nicht zu', 'teils-teils', 'stimme voll und ganz zu']
        },
        {
          question: 'Wofür hast Du KI-Tools seit der letzten Abfrage hauptsächlich verwendet?',
          answerType: 'SingleChoice',
          responseOptions: ['Keine KI Nutzung', 'Informationen verstehen oder erklären lassen', 'Ideen, Struktur oder Argumentation entwickeln', 'Texte schreiben, überarbeiten oder zusammenfassen', 'Sprache verbessern, übersetzen oder umformulieren', 'Daten, Code oder Auswertungen unterstützen', 'Kommunikation vorbereiten, z. B. E-Mail, Nachricht, Feedback', 'Nicht arbeitsbezogene Nutzung', 'Anderes']
        },
        {
          question: 'Für welchen Leistungsbereich hast Du KI seit der letzten Abfrage hauptsächlich eingesetzt?',
          answerType: 'SingleChoice',
          responseOptions: ['Keine KI Nutzung', 'Lehre', 'Forschung', 'Weiterbildung', 'Dienstleistung', 'Administration / Organisation', 'Führung', 'nicht arbeitsbezogene Nutzung', 'anderes']
        }
      ],
      intervalInMs: 1000 * 60 * 60 * 2, // default interval (must be listed in userDefinedInterval_h if set)
      samplingRandomization: 0.1, // 10% randomization, so the interval will be between 108 and 132 minutes
      showAllQuestionsTogether: true,
      allowUserToDisable: false,
      allowUserToChangeInterval: true,
      userDefinedInterval_h: [1, 2, 3]
    },
    dailySurveyTracker: {
      enabled: true,
      surveys: [
        {
          samplingType: 'evening',
          delayInMinutes: -30,
          requireAllAnswers: false,
          questions: [
            {
              question: 'Ich habe heute qualitativ gute Arbeit geleistet.',
              answerType: 'LikertScale',
              scale: 7,
              responseOptions: ['stimme überhaupt nicht zu', 'teils-teils', 'stimme voll und ganz zu']
            },
            {
              question: 'Mein Arbeitstag war heute mental erschöpfend.',
              answerType: 'LikertScale',
              scale: 7,
              responseOptions: ['stimme überhaupt nicht zu', 'teils-teils', 'stimme voll und ganz zu']
            },
            {
              question: 'Heute musste ich häufiger reagieren als planen.',
              answerType: 'LikertScale',
              scale: 7,
              responseOptions: ['stimme überhaupt nicht zu', 'teils-teils', 'stimme voll und ganz zu']
            },
            {
              question: 'Heute hatte ich ausreichend ungestörte Zeit für konzentriertes Arbeiten.',
              answerType: 'LikertScale',
              scale: 7,
              responseOptions: ['stimme überhaupt nicht zu', 'teils-teils', 'stimme voll und ganz zu']
            },
            {
              question: 'Hast du heute KI-Tools für deine Arbeit verwendet?',
              answerType: 'SingleChoice',
              responseOptions: ['Ja', 'Nein']
            },
            {
              question: '(falls du heute KI genutzt hast) KI hat mir heute geholfen, schneller voranzukommen.',
              answerType: 'LikertScale',
              scale: 7,
              responseOptions: ['stimme überhaupt nicht zu', 'teils-teils', 'stimme voll und ganz zu']
            },
            {
              question: '(falls du heute KI genutzt hast) KI hat heute die Qualität meiner Arbeit verbessert.',
              answerType: 'LikertScale',
              scale: 7,
              responseOptions: ['stimme überhaupt nicht zu', 'teils-teils', 'stimme voll und ganz zu']
            },
            {
              question: '(falls du heute KI genutzt hast) Die Nutzung von KI hat heute dazu beigetragen, dass ich häufiger zwischen Aufgaben gewechselt habe.',
              answerType: 'LikertScale',
              scale: 7,
              responseOptions: ['stimme überhaupt nicht zu', 'teils-teils', 'stimme voll und ganz zu']
            },
            {
              question: '(falls du heute KI genutzt hast) Das Prüfen und Überarbeiten von KI-Ergebnissen war heute geistig anstrengend.',
              answerType: 'LikertScale',
              scale: 7,
              responseOptions: ['stimme überhaupt nicht zu', 'teils-teils', 'stimme voll und ganz zu']
            },
            {
              question: '(falls du heute KI genutzt hast) Wie hat KI deine Arbeit heute (positiv/negativ) beeinflusst, und warum?',
              answerType: 'TextResponse',
              responseOptions: 'multiLine',
              maxLength: 800
            },
          ]
        }
      ]
    }
  }
};

export default studyConfig;
