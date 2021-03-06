module.exports = { getCountries: getCountries }

function getCountries() { return [
    new Country("Afghanistan", 38928346, 0.0233, new Economy(19543976895, 0.0267)),
    new Country("Albania", 2877797, -0.0011, new Economy(13038538300, 0.0384)),
    new Country("Algeria", 43851044, 0.0185, new Economy(167555280113, 0.0160)),
    new Country("American Samoa", 55191, -0.0022, new Economy(634000000, -0.0538)),
    new Country("Andorra", 77265, 0.0016, new Economy(3012914131, 0.0187)),
    new Country("Angola", 32866272, 0.0327, new Economy(122123822334, -0.0015)),
    new Country("Antigua and Barbuda", 97929, 0.0084, new Economy(1510084751, 0.0303)),
    new Country("Argentina", 45195774, 0.0093, new Economy(637430331479, 0.0285)),
    new Country("Armenia", 2963243, 0.0019, new Economy(11536590636, 0.075)),
    new Country("Aruba", 106766, 0.0043, new Economy(2700558659, 0.0133)),
    new Country("Australia", 25499884, 0.0118, new Economy(1323421072478, 0.0196)),
    new Country("Austria", 9006398, 0.0057, new Economy(416835976862, 0.0304)),
    new Country("Azerbaijan", 10139177, 0.0091, new Economy(40747792238, 0.0010)),
    new Country("Bahamas", 393244, 0.0097, new Economy(12162100000, 0.0144)),
    new Country("Bahrain", 1701575, 0.0368, new Economy(35432686170, 0.0388)),
    new Country("Bangladesh", 164689383, 0.0101, new Economy(249723862487, 0.0728)),
    new Country("Barbados", 287375, 0.0012, new Economy(4673500000, 0.010)),
    new Country("Belarus", 9449323, -0.0003, new Economy(54456465473, 0.0242)),
    new Country("Belgium", 11589623, 0.0044, new Economy(494763551891, 0.0173)),
    new Country("Belize", 397628, 0.0168, new Economy(1862614800, 0.0144)),
    new Country("Benin", 12123200, 0.0273, new Economy(9246696924, 0.0584)),
    new Country("Bhutan", 771608, 0.0112, new Economy(2528007911, 0.0463)),
    new Country("Bolivia", 11673021, 0.0139, new Economy(37508642113, 0.0420)),
    new Country("Bosnia and Herzegovina", 3280819, -0.0061, new Economy(18054854789, 0.0319)),
    new Country("Botswana", 2351627, 0.0208, new Economy(17406565823, 0.0236)),
    new Country("Brazil", 212559417, 0.0072, new Economy(2053594877013, 0.0098)),
    new Country("Brunei", 437479, 0.0097, new Economy(12128089002, 0.0133)),
    new Country("Bulgaria", 6948445, -0.0074, new Economy(58220973783, 0.0381)),
    new Country("Burkina Faso", 20903273, 0.0286, new Economy(12322864245, 0.0630)),
    new Country("Burundi", 11890784, 0.0312, new Economy(3172416146, 0.0050)),
    new Country("Cabo Verde", 555987, 0.0110, new Economy(1772706451, 0.0401)),
    new Country("Cambodia", 16718965, 0.0141, new Economy(22158209503, 0.0710)),
    new Country("Cameroon", 26545863, 0.0259, new Economy(34922782311, 0.0355)),
    new Country("Canada", 37742154, 0.0089, new Economy(1647120175449, 0.0305)),
    new Country("Central African Republic", 4829767, 0.0178, new Economy(1949411659, 0.0430)),
    new Country("Chad", 16424864, 0.0300, new Economy(9871247732, -0.0295)),
    new Country("Chile", 19116201, 0.0087, new Economy(277075944402, 0.0149)),
    new Country("China", 1439323776, 0.0039, new Economy(12237700479375, 0.069)),
    new Country("Colombia", 50882891, 0.0108, new Economy(314457601860, 0.0179)),
    new Country("Comoros", 869601, 0.0220, new Economy(1068124330, 0.0271)),
    new Country("Congo", 5518087, 0.0256, new Economy(8701334800, -0.0310)),
    new Country("Costa Rica", 5094118, 0.0092, new Economy(57285984448, 0.0328)),
    new Country("Croatia", 41052667, -0.0061, new Economy(55213087271, 0.0292)),
    new Country("Cuba", 11326616, -0.0006, new Economy(96851000000, 0.0178)),
    new Country("Cyprus", 1207359, 0.0073, new Economy(22054225828, 0.0423)),
    new Country("Czech Republic", 10708981, 0.0018, new Economy(215913545038, 0.0429)),
    new Country("Cote d'Ivoire", 26378274, 0.0257, new Economy(37353276059, 0.0770)),
    new Country("Denmark", 5792202, 0.0035, new Economy(329865537182, 0.0224)),
    new Country("Dominica", 71986, 0.0025, new Economy(49672700, -0.0953)),
    new Country("Dominican Republic", 10847910, 0.0101, new Economy(75931656815, 0.0455)),
    new Country("Democratic Republic of the Congo", 89561403, 0.0319, new Economy(37642482562, 0.037)),
    new Country("Ecuador", 17643054, 0.0155, new Economy(104295862000, 0.0237)),
    new Country("Egypt", 102334404, 0.0194, new Economy(235369129338, 0.0418)),
    new Country("El Salvador", 6486205, 0.0051, new Economy(24805439600, 0.0232)),
    new Country("Equatorial Guinea", 1402985, 0.0347, new Economy(12293579173, -0.0492)),
    new Country("Estonia", 1326535, 0.0007, new Economy(26611651599, 0.0485)),
    new Country("Eswatini", 1160164, 0.0105, new Economy(4433664364, 0.0187)),
    new Country("Ethiopia", 114962588, 0.0257, new Economy(80561496134, 0.1025)),
    new Country("Fiji", 896445, 0.0073, new Economy(5061202767, 0.038)),
    new Country("Finland", 5540720, 0.0015, new Economy(252301837573, 0.0263)),
    new Country("France", 65273511, 0.0022, new Economy(2582501307216, 0.0182)),
    new Country("Gabon", 2225734, 0.0245, new Economy(15013950984, 0.005)),
    new Country("Gambia", 2416668, 0.0294, new Economy(1489464788, 0.0456)),
    new Country("Georgia", 3989167, -0.0019, new Economy(15081338092, 0.0483)),
    new Country("Germany", 83783942, 0.0032, new Economy(3693204332230, 0.0222)),
    new Country("Ghana", 31072940, 0.0215, new Economy(58996776238, 0.0814)),
    new Country("Greece", 10423054, -.0048, new Economy(203085551429, 0.0135)),
    new Country("Grenada", 112523, 0.0046, new Economy(1126882296, 0.0506)),
    new Country("Guam", 168775, 0.0089, new Economy(5859000000, 0.0019)),
    new Country("Guatemala", 17915568, 0.0190, new Economy(75620095538, 0.0276)),
    new Country("Guinea", 13132795, 0.0283, new Economy(10472514515, 0.106)),
    new Country("Guinea-Bissau", 1968001, 0.0245, new Economy(1346841897, 0.0592)),
    new Country("Guyana", 786552, 0.0048, new Economy(3621046005, 0.0292)),
    new Country("Haiti", 11402528, 0.0124, new Economy(8408150518, 0.0117)),
    new Country("Honduras", 9904607, 0.0163, new Economy(22978532897, 0.0479)),
    new Country("Hong Kong", 7496981, 0.0082, new Economy(341449340451, 0.0379)),
    new Country("Hungary", 9660351, -0.0025, new Economy(139761138103, 0.0399)),
    new Country("Iceland", 341243, 0.0065, new Economy(24488467010, 0.0364)),
    new Country("India", 1380004385, 0.0099, new Economy(2650725335364, 0.0668)),
    new Country("Indonesia", 273523615, 0.0107, new Economy(1015420587285, 0.0507)),
    new Country("Iran", 83992949, 0.0130, new Economy(454012768724, 0.0376)),
    new Country("Iraq", 4022493, 0.0232, new Economy(192060810811, -0.0207)),
    new Country("Ireland", 4937786, 0.0113, new Economy(331430014003, 0.078)),
    new Country("Israel", 8655535, 0.0160, new Economy(353268411919, 0.0333)),
    new Country("Italy", 60461826, -0.0015, new Economy(1943835376342, 0.015)),
    new Country("Jamaica", 2961167, 0.0044, new Economy(14781107822, 0.0098)),
    new Country("Japan", 126476461, -.00030, new Economy(4872415104315, 0.0171)),
    new Country("Jordan", 10203134, 0.010, new Economy(40068308451, 0.0197)),
    new Country("Kazakhstan", 18776707, 0.0121, new Economy(162886867832, 0.041)),
    new Country("Kenya", 53771296, 0.0228, new Economy(79263075749, 0.0487)),
    new Country("Kiribati", 119449, 0.0157, new Economy(185572502, 0.0033)),
    new Country("Kuwait", 4270571, 0.0151, new Economy(120126277613, -0.0287)),
    new Country("Kyrgyzstan", 6524195, 0.0169, new Economy(7564738836, 0.0458)),
    new Country("Laos", 7275560, 0.0148, new Economy(16853087485, 0.0689)),
    new Country("Latvia", 1886198, -0.0108, new Economy(30463302414, 0.0455)),
    new Country("Lebanon", 6825445, -0.0044, new Economy(53576985687, 0.0153)),
    new Country("Lesotho", 2142249, 0.0080, new Economy(2578265358, -0.0229)),
    new Country("Liberia", 5057681, 0.0244, new Economy(3285455000, 0.0247)),
    new Country("Libya", 6871292, 0.0138, new Economy(38107728083, 0.2668)),
    new Country("Lithuania", 2722289, -0.0135, new Economy(47544459559, 0.0383)),
    new Country("Luxembourg", 625978, 0.0166, new Economy(62316359824, 0.0230)),
    new Country("Macao", 649335, 0.0139, new Economy(50361201096, 0.091)),
    new Country("Madagascar", 27691018, 0.0268, new Economy(11499803807, 0.0417)),
    new Country("Malawi", 19129952, 0.0269, new Economy(6303292264, 0.04)),
    new Country("Malaysia", 3236599, 0.0130, new Economy(314710259511, 0.059)),
    new Country("Maldives", 540544, 0.0181, new Economy(4865546027, 0.0691)),
    new Country("Mali", 20250833, 0.0302, new Economy(15334336144, 0.0540)),
    new Country("Malta", 441543, 0.0027, new Economy(12518134319, 0.0642)),
    new Country("Marshall Islands", 59190, 0.0068, new Economy(204173430, 0.0360)),
    new Country("Mauritania", 4649658, 0.0274, new Economy(5024708656, 0.035)),
    new Country("Mexico", 128932752, 0.0106, new Economy(1150887823404, 0.0204)),
    new Country("Micronesia", 548914, 0.0100, new Economy(336427500, 0.0320)),
    new Country("Moldova", 4033963, -0.0023, new Economy(8128493432, 0.045)),
    new Country("Mongolia", 3278290, 0.0165, new Economy(11433635876, 0.0530)),
    new Country("Montenegro", 628066, 0.0001, new Economy(4844592067, 0.047)),
    new Country("Morocoo", 36910560, 0.0120, new Economy(109708728849, 0.0409)),
    new Country("Mozambique", 31255435, 0.0293, new Economy(12645508634, 0.0374)),
    new Country("Myanmar", 54509800, 0.0067, new Economy(67068745521, 0.0676)),
    new Country("Namibia", 2540905, 0.0186, new Economy(13253698015, -0.0095)),
    new Country("Nepal", 29136808, 0.0185, new Economy(24880266905, 0.0791)),
    new Country("Netherlands", 17134872, 0.0022, new Economy(830572618850, 0.0316)),
    new Country("New Zealand", 4822233, 0.0082, new Economy(204139049909, 0.0303)),
    new Country("Nicaragua", 6624554, 0.0121, new Economy(13814261536)),
    new Country("Niger", 24206644, 0.0384, new Economy(8119710126, 0.0489)),
    new Country("North Macedonia", 2083374, 0.0001, new Economy(11279509014, 0.0024)),
    new Country("Northern Mariana Islands", 57559, 0.0060, new Economy(1593000000, 0.2514)),
    new Country("Norway", 5421241, 0.0079, new Economy(399488897844, 0.0192)),
    new Country("Oman", 5106626, 0.00265, new Economy(70783875163, -0.0027)),
    new Country("Pakistan", 220892340, 0.0200, new Economy(304951818494, 0.057)),
    new Country("Palau", 18094, 0.0048, new Economy(289823500, -0.0357)),
    new Country("Panama", 4314767, 0.0161, new Economy(62283756584, 0.0532)),
    new Country("Papua New Guinea", 8947024, 0.0195, new Economy(20536314601, 0.0255)),
    new Country("Paraguay", 7132538, 0.0125, new Economy(39667400816, 0.0521)),
    new Country("Peru", 32971854, 0.0142, new Economy(211389272242, 0.0253)),
    new Country("Philippines", 109581078, 0.0135, new Economy(313595208737, 0.0668)),
    new Country("Poland", 37846611, -0.0011, new Economy(526465839003, 0.0481)),
    new Country("Portugal", 10196709, -0.0029, new Economy(219308128887, 0.0268)),
    new Country("Qatar", 2881053, 0.0173, new Economy(166928571429, 0.0158)),
    new Country("Romania", 19237691, -0.0066, new Economy(211883923504, 0.0726)),
    new Country("Russia", 145934462, 0.0004, new Economy(1578417211937, 0.0155)),
    new Country("Rwanda", 12952218, 0.0258, new Economy(9135454442, 0.0606)),
    new Country("Saint Kitts & Nevis", 53199, 0.0071, new Economy(992007403, 0.0117)),
    new Country("Saint Lucia", 183627, 0.0046, new Economy(1737504296, 0.0382)),
    new Country("Samoa", 198414, 0.0067, new Economy(840927997, 0.0270)),
    new Country("San Marino", 33931, 0.0021, new Economy(1632860041, 0.015)),
    new Country("Saudi Arabia", 34813871, 0.00159, new Economy(686738400000, -0.0086)),
    new Country("Senegal", 16743927, 0.00275, new Economy(21070225735, 0.0715)),
    new Country("Serbia", 8737371, -0.0040, new Economy(41431648801, 0.0187)),
    new Country("Seychelles", 98347, 0.0062, new Economy(1497959569, 0.0528)),
    new Country("Sierra Leone", 7976983, 0.0210, new Economy(3775047334, 0.0421)),
    new Country("Singapore", 5850342, 0.0079, new Economy(323907234412, 0.0362)),
    new Country("Slovakia", 5459642, 0.0005, new Economy(95617670260, 0.0340)),
    new Country("Slovenia", 2078938, 0.0001, new Economy(48769655479, 0.05)),
    new Country("Solomon Islands", 686884, 0.0255, new Economy(1303453622, 0.0324)),
    new Country("South Africa", 59308690, 0.0128, new Economy(348871647960, 0.0132)),
    new Country("South Korea", 51269185, 0.0009, new Economy(1530750923149, 0.0306)),
    new Country("Spain", 46754778, 0.0004, new Economy(1314314164402, 0.0305)),
    new Country("Sri Lanka", 21413249, 0.0042, new Economy(87357205923, 0.0331)),
    new Country("St. Vincent & Grenadines", 110940, 0.0032, new Economy(785222509, 0.0086)),
    new Country("State of Palestine", 5101414, 0.0241, new Economy(14498100000, 0.0314)),
    new Country("Sudan", 43849260, 0.0242, new Economy(117487857143, 0.0428)),
    new Country("Suriname", 586632, 0.0090, new Economy(2995827901, 0.0169)),
    new Country("Sweden", 10099265, 0.0063, new Economy(535607385506, 0.0229)),
    new Country("Switzerland", 8654622, 0.0074, new Economy(678965423322, 0.0109)),
    new Country("Tajikistan", 9537645, 0.0232, new Economy(7146449583, 0.0762)),
    new Country("Tanzania", 59734218, 0.0298, new Economy(53320625959, 0.071)),
    new Country("Thailand", 69799978, 0.0025, new Economy(455302682986, 0.0391)),
    new Country("Timor-Leste", 1318445, 0.0196, new Economy(2954621000, -0.08)),
    new Country("Togo", 8278724, 0.0243, new Economy(4757776485, 0.044)),
    new Country("Tonga", 105695, 0.0115, new Economy(427659795, 0.0270)),
    new Country("Trinidad and Tobago", 1399488, 0.0032, new Economy(22079017627, -0.0234)),
    new Country("Tunisia", 11818619, 0.0106, new Economy(39952095561, 0.0196)),
    new Country("Turkey", 84339067, 0.0109, new Economy(851549299635, 0.0744)),
    new Country("Turkmenistan", 6031200, 0.0150, new Economy(37926285714, 0.065)),
    new Country("Tuvalu", 11792, 0.0125, new Economy(39731317, 0.0324)),
    new Country("Uganda", 45741007, 0.0332, new Economy(25995031850, 0.0386)),
    new Country("Ukraine", 43733762, -0.0059, new Economy(112154185121, 0.0252)),
    new Country("United Arab Emirates", 9890402, 0.0123, new Economy(382575085092, 0.0079)),
    new Country("United Kingdom", 67886011, 0.0053, new Economy(2637866340434, 0.0179)),
    new Country("United States", 331002651, 0.0059, new Economy(19485394000000, 0.0227)),
    new Country("Uruguay", 3473730, 0.0035, new Economy(56156972158, 0.0266)),
    new Country("Uzbekistan", 33469203, 0.0148, new Economy(49677172714, 0.0530)),
    new Country("Vanuatu", 307145, 0.0242, new Economy(862879789, 0.045)),
    new Country("Vietnam", 97338579, 0.0091, new Economy(223779865815, 0.0681)),
    new Country("Yemen", 29825964, 0.0228, new Economy(31267675216, -0.0594)),
    new Country("Zambia", 18383955, 0.0293, new Economy(25868142073, 0.034)),
    new Country("Zimbabwe", 14862924, 0.0148, new Economy(22040902300, 0.047))
]}

function Country(name, population, populationGrowthRate, economy) {
    this.name = name
    this.population = population
    this.populationGrowthRate = populationGrowthRate
    this.economy = economy
    this.gdpPerCapita = () => {
        return this.economy.gdp / this.population
    }
}

//In USD
function Economy(gdp, gdpGrowthRate) {
    this.gdp = gdp
    this.gdpGrowthRate = gdpGrowthRate
}