const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 69

if( mtk !== null && mtk !== undefined ){
    if ( bahasaIndonesia !== null && bahasaIndonesia !== undefined ) {
        if ( bahasaInggris !== null &&  bahasaInggris !== undefined ) {
            if ( ipa !== null && ipa !== undefined ) {
                const grade = (mtk+bahasaIndonesia+bahasaInggris+ipa)/4
                console.log("Rata-rata = "+grade)

                switch (true) {
                    case grade >= 90 || grade == 100:
                        console.log("Grade = A");
                        break;
                    case grade >= 80 || grade == 89:
                        console.log("Grade = B");
                        break;
                    case grade >= 70 || grade == 79:
                        console.log("Grade = C");
                        break;
                    case grade >= 60 || grade == 69:
                        console.log("Grade = D");
                        break;
                    case grade >= 0 || grade == 59:
                        console.log("Grade = D");
                        break;
                    default:
                        console.log("Grade = None!")
                }
            }
        }
    }
}