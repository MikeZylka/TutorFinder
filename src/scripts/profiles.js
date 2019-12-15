class Profile {
    constructor(name, zip, subjects, distance, img_path) {
        this.__name = name;
        this.__zip = zip;
        this.__subjects = subjects;
        this.__distance = distance;
        this.__img_path = "src/images/" + img_path;
    }
    get name() {
        return this.__name;
    }
    set name(x) {
        this.__name = x;
    }
    get zip() {
        return this.__zip;
    }
    set zip(x) {
        this.__zip = x;
    }
    get subjects() {
        return this.__subjects;
    }
    set subjects(x) {
        this.__subjects = x;
    }
    get distance() {
        return this.__distance;
    }
    set distance(x) {
        this.__distance = x;
    }
    get img_path() {
        return this.__img_path;
    }
    set img_path(x) {
        this.__img_path = x;
    }
    prettyPrintSubjects() {
        var out = "";
        for (var i = 0; i != this.__subjects.length; ++i)
            out += this.__subjects[i] + ", ";
        return out.substring(0, out.length - 2);
    }

}

class TutorProfile extends Profile {
    constructor(name, zip, subjects, distance, img_path, price) {
        super(name, zip, subjects, distance, img_path);
        this.__price = price;
    }
    get price() {
        return this.__price;
    }
    set price(x) {
        this.__price = x;
    }
}

class StudentProfile extends Profile {
    constructor(name, zip, subjects, distance, img_path, grade) {
        super(name, zip, subjects, distance, img_path);
        this.__grade = grade;
    }
    get grade() {
        return this.__grade;
    }
    set grade(x) {
        this.__grade = x;
    }
}

const SUBJECTS = ["English", "Math", "Biology", "Chemistry", "Physics", "History"];

var tutors = []
var students = []


var tutorProfiles = [
    "Amanda;07030;Math,English;10;profile-picture.jpg;20",
    "Brett;07030;English;10;profile-picture2.jpg;15",
    "Kanye;07030;Computer Science;10;profile-picture3.jpg;10",
    "Claire;07030;Physics;10;profile-picture.jpg;15"
];

var studentProfiles = [
    "Amanda;07030;Math,English;10;profile-picture.jpg;11",
    "Brett;07030;English;10;profile-picture2.jpg;12",
    "Kanye;07030;Computer Science;10;profile-picture3.jpg;10",
    "Claire;07030;Physics;10;profile-picture.jpg;9"
];

function generateProfile(profile) {
    var newProfile = document.createElement("div");
    newProfile.className = "tutors__slide";

    var link = document.createElement("a");
    link.href = "#";
    link.class = "tutors__single";

    var img = document.createElement("img");
    img.className = "tutors__single-image";
    img.alt = profile.name.toLowerCase();
    img.src = profile.img_path;

    var name = document.createElement("p");
    var nameContent = document.createTextNode(profile.name);
    name.className = "tutors__single-name";
    name.appendChild(nameContent);

    var subjects = document.createElement("p");
    subjects.className = "tutors__single-concentration";
    var subjectsContent = document.createTextNode("Subjects: " + profile.prettyPrintSubjects());
    subjects.appendChild(subjectsContent);

    link.appendChild(img);
    link.appendChild(name);

    var action = document.createElement("p");
    action.className = "tutors__single-hire";
    var actionContent = document.createTextNode("");

    if (profile instanceof TutorProfile) {
        var price = document.createElement("p");
        price.className = "tutors__single-concentration";
        var priceContent = document.createTextNode("$" + profile.price.toString() + " / hr");
        price.appendChild(priceContent);
        link.appendChild(price);
        actionContent.textContent = "Hire " + profile.name;
    } else {
        var grade = document.createElement("p");
        grade.className = "tutors__single-concentration";
        var gradeContent = document.createTextNode("Grade: " + profile.grade);
        grade.appendChild(gradeContent);
        link.appendChild(grade);
        actionContent.textContent = "Tutor " + profile.name;
    }

    action.appendChild(actionContent);
    link.appendChild(subjects);
    link.appendChild(action);

    newProfile.style.padding = "4rem 0"
    link.style.borderBottom = "4px solid #2093cd";
    link.style.backgroundColor = "#FFFFFF";
    link.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)"
    link.style.maxWidth = "200px";
    link.style.width = "100%";
    link.style.padding = "1rem 6rem";


    newProfile.appendChild(link);

    // document.getElementById("siema").appendChild(newProfile);

    return newProfile;

}


function applyFilters(profileList, filters) {
    if (isTutorList) {
        //filters: distance, subject, price
        var results = profileList.filter(function (el) {
            //TODO
            return el.price <= filters.price;
        });
    } else {
        //filters: distance, subject, grade
    }

}


window.addEventListener("load", function () {
    //    var pageName = location.href.split("/".slice(-1));
    if (sessionStorage.name == undefined) {
        window.location.href = "./index.html";
        alert("You are not logged in!");
    }
    const slider = new Siema({
        duration: 200,
        easing: "ease-out",
        perPage: 1,
        startIndex: 0,
        draggable: true,
        loop: true
    });
    if (sessionStorage.isTutor == "false") {
        for (var i = 0; i != tutorProfiles.length; ++i) {
            var params = tutorProfiles[i].split(";");
            var subjects = params[2].split(",");
            tutors.push(new TutorProfile(params[0], params[1], subjects, params[3], params[4], params[5]));
        }
        for (var i = 0; i != tutors.length; ++i) {
            var profile = generateProfile(tutors[i]);
            slider.append(profile);
        }
        document.getElementById("swipe_title").innerText = "Swipe Through Tutors";
    } else {
        for (var i = 0; i != studentProfiles.length; ++i) {
            var params = studentProfiles[i].split(";");
            var subjects = params[2].split(",");
            students.push(new StudentProfile(params[0], params[1], subjects, params[3], params[4], params[5]));
        }
        for (var i = 0; i != students.length; ++i) {
            var profile = generateProfile(students[i]);
            slider.append(profile);
        }
        document.getElementById("swipe_title").innerText = "Swipe Through Students";

    }

});