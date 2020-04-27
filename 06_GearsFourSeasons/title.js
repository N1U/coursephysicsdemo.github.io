class Title {

    constructor() {
        this.days = [
            "初一", "初二", "初三", "初四", "初五", "初六", "初七",
            "初八", "初九", "初十", "十一", "十二", "十三", "十四", "十五", "十六",
            "十七", "十八", "十九", "二十", "二十一", "二十二", "二十三", "二十四",
            "二十五", "二十六", "二十七", "二十八", "二十九", "三十",
        ];
        this.month = [
            "正月", "二月", "三月", "四月", "五月", "六月",
            "七月", "八月", "九月", "十月", "十一月", "十二月",
        ];

        this.solar = [
            "立春", "雨水", "惊蛰", "春分", "清明", "谷雨",
            "立夏", "小满", "芒种", "夏至", "小暑", "大暑",
            "立秋", "处暑", "白露", "秋分", "寒露", "霜降",
            "立冬", "小雪", "大雪", "冬至", "小寒", "大寒",
        ];

        this.daysItem = "";
        this.monthItem = "";
        this.solarItem = "";
    }

    run() {
        this.daysItem = this.days[parseInt(map(gDay.angle, 0, TWO_PI, 0, gDay.tooth))];
        this.monthItem = this.month[parseInt(map(gMonth.angle, 0, TWO_PI, 0, gMonth.tooth))];
        this.solarItem = this.solar[parseInt(map(gSolar.angle, 0, TWO_PI, 0, gSolar.tooth))];
        
        fill(20);
        textSize(24);
        text(this.monthItem + this.daysItem + "-" + this.solarItem, 0, 380);
    }


}