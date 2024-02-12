
var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?68688';
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
var options = {
    "enabled": true,
    "chatButtonSetting": {
        "backgroundColor": "#ae5eab",
        "ctaText": "Message Us",
        "borderRadius": "25",
        "marginLeft": "50",
        "marginBottom": "50",
        "marginRight": "50",
        "position": "left"
    },
    "brandSetting": {
        "brandName": "miniswimmer",
        "brandSubTitle": "Typically replies within a minutes",
        "brandImg": "https://images.prismic.io/minifit/5f883e4a-c531-4206-b158-5214133a0c93_Alma-Student.gif?auto=compress,format",
        "welcomeText": "Hi there!\nHow can I help you?",
        "messageText": "Hello, I have a question about {{page_link}}",
        "backgroundColor": "#ae5eab",
        "ctaText": "Start Chat",
        "borderRadius": "25",
        "autoShow": false,
        "phoneNumber": "13053328555"
    }
};
s.onload = function () {
    CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);