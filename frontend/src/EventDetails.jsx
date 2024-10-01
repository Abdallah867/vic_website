import { useParams , useNavigate } from 'react-router-dom';
function EventDetails() {
   
  const { nameevent } = useParams();  //here is the event name
  const events = [
    {
        "name": "Ignite:",
        "description": " If you have 5 min to talk about anything you want and all Algiers will be there to listen , what your world will be about ? .Ignite  is a fast event that is held in many places around the world. The VIC brought it up to Algeria fro the first time in 2018, the concept of ignite is to talk about any choosen topics in the space of 5 min using twenty slides , each slide takes 15 seconds before it automatically skipped.  ",
        "date": "Ignite aims to encourage public speaking by giving the opportunity to ANYONE to take the stand and explain his topic , beside developping participants's communication and public speaking while expressing themselves and sharing their own ideas and personal stories . ",
        "image": './ignite.png'
    }, 
    {
        "name": "MasterClass:",
        "description": "The MasterClaa is series of training sessions and workshops that goes online during the summer (2024's edition) . This unique event aims to provide participants with the opportunity to learn directely from professionals and experts in various fields. Whatever in science ,technology, arts or personal development , each session  is designed to enrich participants' knowledge and skills while fostering interaction and sharing experiences .  ",
        "date": "MasterClass aims to Provide HIGH QUALITY training sessions on a variety of topics , Create an environment conducive to networking among students , professionals and experts ,promoting exchanges and future collaborations. MasterClss encourages the personal and professional development of participants by offering practical tools and strategies and inspire students to pursue their passions and consider careers in various fields by showcasing the possibilities available to them . ",
    }, 
    {
        "name": "HourOfCode:",
        "description": "Hour of Code is an international initiative of computer science Education Week . It offers an hour of introductionto computers using fun ways , allowing anyone to learn the asics , regardless of age . The first beneficiaries of this event are children,who will be introduced to the vast world of programming through fun and creative activities beside programming competition for students . ",
        "date": " Hour Of Code aime to : introduce students to the world of programming for one hour , inspire participants and make them discover and love programming , give students a chance to exploit their creativity and demystify the principle of programming and showcase that everyone can have fun coding . ",
        "image": './HourOfCode2.png'
    }, 
    {
        "name": "Gamecraft:",
        "description": " Inspired by Global Game Jams , an international video game dev event, GAMECRAFT is a hackathon whose main theme is video games. Open to amateur and professional developers , its objective is to challenge participants to create a fully functional game based in a theme proposed by the organizing team within a specific time frame. To support participants throughout the compitition , qualified coaches will offer training and lead workshops during the period dedicated to the hackathon . Participants will then have to design a video game respecting the theme communicated by organizers at the part of the event's period .  ",
        "date": " Game Craft aime to introduce and improve the Game Dev culture in Algeria , provide game dev enthusiasts with an environment that fosters their skills and widens their network and Encourage more people to appreciate and invest in game development locally. ",
        "image": './Game.png'
    }, 
    {
      "name": "polymaze:",
      "description": "polymaze encourages creativity, compitition and teamwork by challenging participants to design an autonomous robot capable of solving a maze within a given time frame . This compition tests their skills in mechanics , electronics and automation, to create the best version of their robot that will successfully find the exit from the maze in record time. By correcting our past mistakes and renewing parts of the compitition , our dedicated organizing team is committed to making Polymaze one of the leading robotics compitition on the regional scene, It's such an exeptional opportunity for algerians passionate about technology to discover and showcase their remarkable skills in robotics . ",
      "date": " Polymaze is an exceptional opportunity for algerians passionate about technology to discover and showcase their remarkable skills in robotics, it's a unique gathering of these passionate minds from shools and universities across the country to exchange innovative ideas with a competitive spirit . Polymaze also arouse public interest in robotics field . ",
      "image": './polymaze.png'
  }, 
  {
      "name": "charity:",
      "description": "CHARITY VIC is an annual charity event focused on providing assistance to those in need . In the previous year, funds raised contributed to the construction of of a pediatric oncology hospital with el Badr association . This year , the initiative aimed to support families in need . The event , spanning from   March to June , involved diverse fundraising activities such as charity sales , trainings and workshops with visits to retirement homes , orphanages and hospitals , culminating in a 'giving day' where collected funds and food were distributed to needy families ",
      "date": " Charity aime to : providing students with the opportunity to practise their empathy and grow as humans , building students's leadership, cordination and collaboration skills , helping students buils a stronger resume and helping people in need which improves the general well-being of both students and society as a whole. ",
      "image": './charity (2).png'
  }, 
  {
      "name": "Anglosphere:",
      "description": "Anglosphere is an enriching experience that offers a range of activities . Over the course of the day ,participants explore the role of English in various specialist fields . Engaging workshops, interacitve sessions, language games and compititions further strengthen language proficiency and transversal skills. ",
      "date": "Anglosphere has a positive impact of the OT , it gave them a safe space and an opportunity to leave their comfort zone and unveil some of their skills. The main initial goal of the event , which was to create a miniature English speaking society where people would have fun and enhance their skills , and this was successfully achieved in the latest editions . ",
      "image": './anglo.png'
  }, 
  {
      "name": "Techitup:",
      "description": "Tech It Up is the go-to stage for young inventors , tech enthusiasts , and science leaders , celebrating innovation . It's a dynamic hub for bright minds with groundbreaking ideas. Beyond a showcase , it's a platform for inventors to exhibit creations and discuss emerging tech sectors ",
      "date": " Tech It Up aime to : Bring together young inventors , technology enthusiasts,and scientific leaders , attract individuals with innovative ideas and keen interest in the ongoing technological revolution . Also , create a platform , TECH IT UP , for inventors to showcase and promote their innovations , foster a collaborative environment for sharing perspectives on emerging technology sectors and FACILITATE connections among individuals with brilliant minds, encouraging knowledge exchange and networking within the tech community. ",
      "image": './techitup.png',
      
  }, 
  {
      "name": "Engineer Gala:",
      "description": "Engineers' GALA, an exclusive and highly anticipated event, is the ideal opportunity for future leaders of the Algerian industry to meet the most influential players in this sector , to familiarize themselves with best participants , and to forge lasting links with seasoned professionals. It is also an opportunity for young graduated to get noticed,stand out and project themselves into a stimulating professional world . This edition was to celebrate the tenth year of the club.  ",
      "date": " Engineer Gala aime to bring together engineering leaders,researchers, alumni and recent graduates, Promote familiarization with best practices and the forging of lasting relationships besides offering young graduates the opportunity to stand out in a stimulating professional context. ",
      "image": './Galapic.png'
  }, 
  {
      "name": "CPSP:",
      "description": "The 'Classe Prepa Starter Pack ' is an event specifically designed for freshmen joining the National Polytechnique School. Its main objective is to allow students who have already completed their first year to share their experiences and provide advice on modules and available resources , among other things . " ,
      "date": "CPSP's GOALS are : experience sharing, module guidance , resource accessibility and Community building. ",
      
  }, 
  {
      "name": "Ingenium:",
      "description": "Ingenium is an event where participants teams must use their Problem Solving Skills to find an engineering solution to a real-world problem, the latter proposed by a company . These teams must also pitch solutions to companies within a specified period of time . Participants do not stop with the end of the event but they will continue afterwards with the company through a study all year around  ",
      "date": "Ingenium GOALS are : Use problem solving skills to solve a real problem and Design an engineering solution to meet the needs posed by a business. ",
      "image": './ingenium.png'
  }, 
  {
      "name": "Spelling Bee:",
      "description": "Spelling Bee is an international compitition where participants must spell a wide selection of words . With a generally varying level of difficulty . Tp participate , competitors must memorize the spelling of words as written in dectionaries and recite them correctely . The compitition has three distinct phases, and between each of them , a determinal number of participants are eliminated according to the rules of the classic game",
      "date": " Spelling Bee aime to promote and encourage mastery of the words, provide an opportunity to learn new concepts , develop participants' communication and public speaking skills. ",
      
      
  }, 
    ];
    const event_details = events.find((event) => event.name === nameevent);
    console.log(event_details);
    return (
        <div id='divdetails'>
          <h2 id='eventtitledetail'>{event_details?.name}</h2>
          <div id='textandimgandgoals'>
            <div id='pictext'>
              {event_details?.image && (
                <img id='imagedetails' src={`../${event_details.image}`} alt={event_details.name} />
              )}
              <div className='textdetails'>
                <p>{event_details?.description}</p>
                <p>{event_details?.date}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    export default EventDetails;
