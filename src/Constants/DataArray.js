import tv from '../Asset/tv.png'
import mobile from '../Asset/mobile-0819.jpg'
import devices from '../Asset/devices.png'
import children from '../Asset/children.png'

export const DeviceList = () => {
    return (
        [
            {
                id: 'tv',
                title: 'Enjoy on your TV.',
                subtitle: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
                image: tv,
                classname: 'tv-player',
                video: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
            },
            {
                id: 'mobile',
                title: 'Download your shows to watch offline.',
                subtitle: 'Save your favourites easily and always have something to watch.',
                image: mobile
            },
            {
                id: 'devices',
                title: 'Watch everywhere.',
                subtitle: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
                image: devices,
                classname: 'desktop-player',
                video: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v'
            },
            {
                id: 'children',
                title: 'Create profiles for children.',
                subtitle: 'Send children on adventures with their favourite characters in a space made just for them—free with your membership.',
                image: children
            }
        ]
    )
}


export const FooterLinks = () => {
    return (
        [
            {
                linkname: 'FAQ'
            },
            {
                linkname: 'Help Centre'
            },
            {
                linkname: 'Account'
            },
            {
                linkname: 'Media Centre'
            },
            {
                linkname: 'Investor Relations'
            },
            {
                linkname: 'Jobs'
            },
            {
                linkname: 'Ways to Watch'
            },
            {
                linkname: 'Terms of Use'
            },
            {
                linkname: 'Privacy'
            },
            {
                linkname: 'Cookie Preferences'
            },
            {
                linkname: 'Corporate Information'
            },
            {
                linkname: 'Contact Us'
            },
            {
                linkname: 'Speed Test'
            },
            {
                linkname: 'Legal Notices'
            },
            {
                linkname: 'Only on Netflix'
            },

        ]
    )
}

export const AccordionData = () => {
    return(
        [
            {
                question: "What is Netflix?",
                answerPara1: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
                answerPara2: "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price.There's always something new to discover, and new TV shows and movies are added every week!"
            },
            {
                question: "How much does Netflix cost?",
                answerPara1: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."
            },
            {
                question: "Where can I watch?",
                answerPara1: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
                answerPara2: "You can also download your favourite shows with the iOS, Android, or Windows 10 app.Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
            },
            {
                question: "How do I cancel?",
                answerPara1: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
            },
            {
                question: "What can I watch on Netflix?",
                answerPara1: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
            },
            {
                question: "Is Netflix good for kids?",
                answerPara1: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
                answerPara2: "Kids profiles come with PIN - protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
            }
        ]
    )
}