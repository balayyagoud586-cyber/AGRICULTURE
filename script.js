let selectedLanguage = "en";

function changeLanguage() {
    selectedLanguage = document.getElementById("languageSelect").value;

    if (selectedLanguage === "te") {
        alert("భాష తెలుగు గా మార్చబడింది");
    }
    else if (selectedLanguage === "hi") {
        alert("भाषा हिंदी में बदल दी गई है");
    }
    else {
        alert("Language changed to English");
    }
}


function speakText() {

    let text = "";

    if (selectedLanguage === "en") {
        text = "Welcome to Smart Farming Assistant. Your farm health is good. Please check today's weather and irrigation recommendations.";
    }

    else if (selectedLanguage === "te") {
        text = "స్మార్ట్ ఫార్మింగ్ అసిస్టెంట్‌కు స్వాగతం. మీ పంట ఆరోగ్యం బాగుంది. ఈరోజు వాతావరణం మరియు నీటి పారుదల సూచనలను చూడండి.";
    }

    else if (selectedLanguage === "hi") {
        text = "स्मार्ट फार्मिंग असिस्टेंट में आपका स्वागत है। आपकी फसल की स्थिति अच्छी है। आज का मौसम और सिंचाई की सलाह देखें।";
    }

    let speech = new SpeechSynthesisUtterance(text);

    speech.lang =
        selectedLanguage === "te" ? "te-IN" :
        selectedLanguage === "hi" ? "hi-IN" :
        "en-IN";

    speech.rate = 0.9;
    speech.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
}