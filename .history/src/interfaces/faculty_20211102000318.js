
export class roomInfo {
    constructor(
        url,
        name,
        longitude,
        latitude,
        capacity,
        college
    ) { 
        this.url = url;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.capacity = capacity;
        this.college = college

    }
}

export class period {
    constructor(
        url,
        day,
        type,
        fromTime,
        toTime,
        duration,
        room,
        course
    ) { 
        this.url = url;
        this.roomInfo = new roomInfo();
        this.day = day;
        this.type = type;
        this.fromTime = fromTime;
        this.duration = duration;
        this.room = room;
        this.course = course;
        this.toTime = toTime;
    }
}

e
export class Faculty {

    constructor(
        url,
        name,
        college,
        collegeInfo,
        coursesInfo,
        courses
    ) { 
        this.url = url;
        this.name = name;
        this.college = college;
        this.collegeInfo = collegeInfo;
        this.coursesInfo = coursesInfo;
        this.courses = courses;
    }
}