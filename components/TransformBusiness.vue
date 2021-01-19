<template>
  <div>
    <section :class="{'mb-0': !showIndustriesSwiper}">
      <div class="transform_business_wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="title">
          <div>
            <div class="h1">Transform your business with our support.</div>
            <h4>Contact us for a consultation.</h4>

            <nuxt-link :to="{name:'consultus'}">
              <Button
                clsass="webBtn wow fade-in-bottom"
                data-wow-delay="0.1s"
                buttonText="Consult Now"
                color="#fff"
                style="border: 1px solid rgb(3, 124, 255); padding-left: 1.75rem; margin-top: 1.5rem; background: #006ada;"
                :center="true"
              />
            </nuxt-link>

            <!-- <Button
                @click.native="consultNow"
                clsass="webBtn wow fade-in-bottom"
                data-wow-delay="0.1s"
                buttonText="Consult Now"
                color="#fff"
                style="border: 1px solid rgb(3, 124, 255); padding-left: 1.75rem; margin-top: 1.5rem; background: #006ada;"
                :center="true"
            />-->

            <!-- <Button
                @click.native="consultNow"
                clsass="transformBuusinessResponsiveBtn wow fade-in-bottom"
                data-wow-delay="0.1s"
                buttonText="Consult Now"
                color="#fff"
                style="border: 1px solid rgb(3, 124, 255);padding-left: 6rem; margin-left: -0.6rem; margin-top: 1.5rem; background: #006ada;"
            />-->
            <!-- style="margin-top:1rem;" -->
          </div>
        </div>
      </div>
    </section>

    <!-- Consult Us Form -->
    <!-- <ConsultUsForm v-if="consultNowModal" @closeConsult="closePopup" /> -->
    <!-- Consult Us Form -->

    <IndustriesSwiper v-if="showIndustriesSwiper"/>
  </div>
</template>


<script>
import Button from '@/components/Button.vue'
import IndustriesSwiper from '@/components/Industries/IndustriesSwiper.vue'
// import ConsultUsForm from '@/components/ConsultUs/ConsultUsForm.vue'

export default {
  components: {
    Button,
    IndustriesSwiper
    // ConsultUsForm
  },

  data() {
    return {
      consultNowModal: false
    }
  },

  computed: {
    // Check route to show industries swipper
    showIndustriesSwiper() {
      let route = this.$route.name
      if (
        route != 'industries' &&
        route != 'contactus' &&
        route != 'services' &&
        route != 'services-service' &&
        route != 'services-service-subservice' &&
        route != 'casestudy-id'
      ) {
        return true
      } else {
        return false
      }
    }
  },

  created() {},
  methods: {
    consultNow() {
      this.consultNowModal = true
      $('body').css('overflow-x', 'hidden')
      $('html').css('overflow-x', 'hidden')
    },
    closePopup() {
      this.consultNowModal = false
      $('body').css('overflow-x', 'auto')
      $('html').css('overflow-x', 'auto')
    }
  }
}
</script>

<style scoped>
.transform_business_wrapper {
  position: relative;
  height: 380px;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #0a0a0a 100%);
  /* background: radial-gradient(ellipse at bottom, #0a0a0a 0%, #1b2735 100%); */
  overflow: hidden;
}

.transform_business_wrapper h4 {
  font-weight: 100;
}

#title {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  color: #fff;
  text-align: center;
  font-weight: 600;
  font-size: 30px;
  /* margin-top: -60px; */
  padding-left: 10px;
  width: 100%;
  height: 100%;
  /* transform: translateY(-30%); */
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
}
/* #title span {
  background: -webkit-linear-gradient(white, #38495a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
} */

#stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 219px 1294px #fff, 1082px 705px #fff, 1334px 1111px #fff,
    1321px 1002px #fff, 811px 592px #fff, 669px 43px #fff, 1119px 1768px #fff,
    68px 1410px #fff, 1772px 1996px #fff, 1685px 557px #fff, 1976px 1094px #fff,
    1212px 1191px #fff, 436px 1235px #fff, 791px 1290px #fff, 407px 514px #fff,
    672px 534px #fff, 395px 302px #fff, 115px 1111px #fff, 1728px 174px #fff,
    515px 1122px #fff, 639px 1906px #fff, 548px 439px #fff, 996px 1264px #fff,
    507px 1421px #fff, 1427px 288px #fff, 1234px 1336px #fff, 1534px 1105px #fff,
    354px 1643px #fff, 730px 1808px #fff, 365px 291px #fff, 129px 1579px #fff,
    246px 1559px #fff, 443px 1070px #fff, 1108px 1012px #fff, 1136px 1865px #fff,
    806px 331px #fff, 318px 1645px #fff, 883px 665px #fff, 225px 1421px #fff,
    1198px 835px #fff, 514px 318px #fff, 1054px 175px #fff, 1018px 251px #fff,
    1939px 1756px #fff, 185px 817px #fff, 1962px 535px #fff, 1758px 1008px #fff,
    1482px 612px #fff, 1262px 1260px #fff, 60px 892px #fff, 692px 552px #fff,
    1015px 759px #fff, 1916px 455px #fff, 208px 705px #fff, 711px 325px #fff,
    1706px 1082px #fff, 1288px 717px #fff, 1304px 182px #fff, 1989px 929px #fff,
    693px 117px #fff, 1026px 1406px #fff, 1273px 1497px #fff, 521px 1497px #fff,
    263px 330px #fff, 1204px 1805px #fff, 1100px 889px #fff, 292px 1006px #fff,
    1731px 1402px #fff, 296px 362px #fff, 307px 1710px #fff, 260px 1477px #fff,
    436px 348px #fff, 277px 873px #fff, 1526px 907px #fff, 852px 567px #fff,
    1046px 1168px #fff, 1744px 1086px #fff, 1563px 651px #fff, 1275px 898px #fff,
    1768px 1642px #fff, 1098px 581px #fff, 265px 617px #fff, 803px 695px #fff,
    279px 1068px #fff, 771px 1359px #fff, 1177px 26px #fff, 1859px 52px #fff,
    1457px 1354px #fff, 1766px 1016px #fff, 1143px 636px #fff, 820px 1421px #fff,
    1590px 1317px #fff, 1230px 250px #fff, 998px 1963px #fff, 439px 1302px #fff,
    95px 522px #fff, 1659px 1962px #fff, 409px 437px #fff, 1955px 200px #fff,
    684px 660px #fff, 348px 1394px #fff, 305px 1392px #fff, 1839px 531px #fff,
    102px 1687px #fff, 138px 394px #fff, 1210px 17px #fff, 1775px 593px #fff,
    1698px 31px #fff, 1647px 339px #fff, 1839px 1441px #fff, 867px 1028px #fff,
    1805px 440px #fff, 1684px 176px #fff, 819px 364px #fff, 616px 1934px #fff,
    587px 1212px #fff, 341px 1935px #fff, 418px 1773px #fff, 1140px 1995px #fff,
    374px 554px #fff, 1996px 488px #fff, 316px 953px #fff, 536px 500px #fff,
    811px 707px #fff, 1638px 494px #fff, 481px 644px #fff, 33px 1873px #fff,
    1880px 1508px #fff, 946px 1917px #fff, 81px 1296px #fff, 1962px 146px #fff,
    1658px 988px #fff, 132px 142px #fff, 170px 2px #fff, 89px 1109px #fff,
    356px 911px #fff, 906px 1492px #fff, 969px 1436px #fff, 917px 699px #fff,
    328px 1369px #fff, 1291px 517px #fff, 393px 1617px #fff, 1194px 613px #fff,
    1821px 1597px #fff, 1396px 661px #fff, 455px 688px #fff, 160px 433px #fff,
    1689px 406px #fff, 1987px 1523px #fff, 934px 1015px #fff, 22px 258px #fff,
    396px 1766px #fff, 1681px 1469px #fff, 1513px 264px #fff, 149px 1793px #fff,
    1455px 250px #fff, 1584px 1969px #fff, 1690px 1578px #fff,
    1588px 1588px #fff, 1181px 1792px #fff, 1220px 897px #fff,
    1658px 1783px #fff, 1965px 1437px #fff, 1142px 167px #fff, 1086px 502px #fff,
    1300px 89px #fff, 727px 902px #fff, 546px 1165px #fff, 1378px 1956px #fff,
    451px 87px #fff, 1014px 502px #fff, 228px 1567px #fff, 417px 1121px #fff,
    365px 1730px #fff, 1954px 475px #fff, 1596px 747px #fff, 1084px 923px #fff,
    1989px 1991px #fff, 626px 1404px #fff, 951px 1497px #fff, 630px 1187px #fff,
    769px 634px #fff, 253px 927px #fff, 1926px 96px #fff, 744px 1789px #fff,
    1606px 1500px #fff, 1625px 1086px #fff, 388px 687px #fff, 1253px 829px #fff,
    1664px 1654px #fff, 1597px 1191px #fff, 487px 1416px #fff, 890px 749px #fff,
    942px 867px #fff, 189px 577px #fff, 106px 1071px #fff, 506px 84px #fff,
    1568px 1721px #fff, 578px 757px #fff, 1997px 146px #fff, 1485px 348px #fff,
    803px 1924px #fff, 317px 946px #fff, 476px 125px #fff, 934px 855px #fff,
    1699px 878px #fff, 1584px 843px #fff, 1990px 484px #fff, 829px 1452px #fff,
    824px 802px #fff, 146px 1031px #fff, 1871px 224px #fff, 1255px 1953px #fff,
    1517px 1509px #fff, 1865px 973px #fff, 801px 1535px #fff, 100px 1464px #fff,
    375px 22px #fff, 1049px 647px #fff, 971px 1px #fff, 1930px 651px #fff,
    1139px 683px #fff, 1924px 488px #fff, 382px 495px #fff, 1984px 124px #fff,
    1453px 533px #fff, 962px 1828px #fff, 434px 1925px #fff, 459px 455px #fff,
    8px 1649px #fff, 1411px 667px #fff, 1379px 1893px #fff, 140px 15px #fff,
    1719px 873px #fff, 242px 1961px #fff, 887px 382px #fff, 1834px 121px #fff,
    1992px 625px #fff, 780px 1253px #fff, 1024px 204px #fff, 1307px 1615px #fff,
    1605px 171px #fff, 1939px 1867px #fff, 952px 1689px #fff, 27px 100px #fff,
    613px 1961px #fff, 345px 1783px #fff, 310px 1145px #fff, 1202px 1590px #fff,
    1417px 886px #fff, 150px 956px #fff, 911px 1882px #fff, 103px 1478px #fff,
    1073px 1853px #fff, 1891px 1139px #fff, 529px 1579px #fff, 1847px 827px #fff,
    1935px 992px #fff, 421px 1069px #fff, 888px 1067px #fff, 1726px 1563px #fff,
    1333px 1215px #fff, 1333px 615px #fff, 1318px 1051px #fff, 1744px 828px #fff,
    248px 839px #fff, 1209px 1736px #fff, 184px 202px #fff, 1817px 197px #fff,
    1598px 28px #fff, 1750px 1974px #fff, 131px 388px #fff, 723px 1305px #fff,
    1146px 1945px #fff, 113px 975px #fff, 1280px 991px #fff, 675px 1899px #fff,
    1117px 977px #fff, 1132px 736px #fff, 1119px 1355px #fff, 190px 411px #fff,
    1675px 1226px #fff, 544px 1380px #fff, 1541px 77px #fff, 1799px 1462px #fff,
    149px 1585px #fff, 1164px 344px #fff, 1762px 46px #fff, 1355px 1498px #fff,
    848px 1807px #fff, 1496px 1620px #fff, 733px 597px #fff, 1833px 1980px #fff,
    725px 1192px #fff, 608px 224px #fff, 1011px 1962px #fff, 1247px 224px #fff,
    563px 1455px #fff, 67px 694px #fff, 1165px 1711px #fff, 1301px 311px #fff,
    1978px 1296px #fff, 724px 1050px #fff, 378px 1446px #fff, 1755px 1313px #fff,
    1193px 1626px #fff, 381px 1903px #fff, 898px 791px #fff, 1880px 1653px #fff,
    481px 695px #fff, 207px 834px #fff, 1803px 144px #fff, 702px 1325px #fff,
    1198px 1684px #fff, 218px 385px #fff, 1465px 1602px #fff, 850px 1123px #fff,
    1079px 1537px #fff, 1498px 1646px #fff, 819px 1883px #fff, 747px 789px #fff,
    774px 1763px #fff, 1749px 506px #fff, 1572px 1416px #fff, 576px 39px #fff,
    584px 817px #fff, 29px 1918px #fff, 1821px 1722px #fff, 409px 609px #fff,
    1169px 1083px #fff, 1308px 891px #fff, 1190px 31px #fff, 83px 242px #fff,
    863px 1654px #fff, 18px 789px #fff, 1238px 239px #fff, 1421px 1757px #fff,
    310px 1271px #fff, 80px 1454px #fff, 1138px 1458px #fff, 861px 533px #fff,
    1347px 268px #fff, 1633px 1406px #fff, 539px 1365px #fff, 77px 162px #fff,
    323px 1612px #fff, 1944px 816px #fff, 1480px 479px #fff, 381px 1231px #fff,
    85px 1441px #fff, 501px 1074px #fff, 1596px 1284px #fff, 815px 1009px #fff,
    92px 393px #fff, 1367px 299px #fff, 518px 115px #fff, 295px 709px #fff,
    507px 28px #fff, 777px 212px #fff, 197px 1136px #fff, 1086px 1703px #fff,
    453px 1861px #fff, 1623px 356px #fff, 99px 411px #fff, 932px 1127px #fff,
    1489px 1320px #fff, 85px 449px #fff, 743px 140px #fff, 769px 1834px #fff,
    1041px 1923px #fff, 1721px 1234px #fff, 623px 220px #fff, 231px 409px #fff,
    1363px 1257px #fff, 616px 1720px #fff, 1247px 289px #fff, 1762px 1312px #fff,
    1495px 361px #fff, 788px 529px #fff, 801px 1779px #fff, 1109px 1761px #fff,
    1033px 179px #fff, 440px 824px #fff, 993px 1128px #fff, 926px 910px #fff,
    883px 1435px #fff, 171px 659px #fff, 1871px 1753px #fff, 1724px 983px #fff,
    1990px 1598px #fff, 1819px 687px #fff, 1514px 978px #fff, 212px 1586px #fff,
    484px 1224px #fff, 766px 193px #fff, 1707px 307px #fff, 1832px 1893px #fff,
    1859px 95px #fff, 1576px 35px #fff, 502px 130px #fff, 274px 991px #fff,
    266px 375px #fff, 887px 470px #fff, 1314px 356px #fff, 1380px 831px #fff,
    348px 4px #fff, 1773px 1644px #fff, 1554px 1207px #fff, 1352px 1377px #fff,
    1109px 1603px #fff, 1517px 305px #fff, 1218px 892px #fff, 531px 1651px #fff,
    1853px 1947px #fff, 613px 1975px #fff, 856px 940px #fff, 398px 770px #fff,
    1985px 126px #fff, 1061px 501px #fff, 1034px 444px #fff, 1389px 297px #fff,
    523px 1665px #fff, 1027px 1207px #fff, 1744px 394px #fff, 1967px 1347px #fff,
    1944px 1216px #fff, 1742px 35px #fff, 1817px 1983px #fff, 339px 1445px #fff,
    803px 46px #fff, 1878px 488px #fff, 630px 1271px #fff, 734px 103px #fff,
    285px 660px #fff, 123px 1200px #fff, 1035px 1646px #fff, 1306px 1090px #fff,
    1183px 1496px #fff, 1083px 768px #fff, 1547px 1107px #fff, 22px 664px #fff,
    1820px 835px #fff, 1820px 947px #fff, 959px 1972px #fff, 1464px 1203px #fff,
    234px 1991px #fff, 188px 545px #fff, 429px 266px #fff, 1721px 560px #fff,
    1207px 577px #fff, 921px 1175px #fff, 430px 777px #fff, 857px 411px #fff,
    891px 1495px #fff, 311px 233px #fff, 1401px 496px #fff, 1979px 1956px #fff,
    1753px 605px #fff, 1014px 178px #fff, 1456px 1439px #fff, 239px 1414px #fff,
    105px 711px #fff, 64px 1648px #fff, 584px 999px #fff, 1323px 513px #fff,
    1482px 1503px #fff, 483px 862px #fff, 1725px 63px #fff, 318px 909px #fff,
    255px 789px #fff, 1376px 1746px #fff, 14px 1044px #fff, 1418px 720px #fff,
    1295px 422px #fff, 838px 1984px #fff, 138px 1330px #fff, 1627px 1789px #fff,
    605px 234px #fff, 545px 1988px #fff, 1563px 1537px #fff, 1003px 973px #fff,
    139px 1944px #fff, 649px 1365px #fff, 245px 1440px #fff, 1722px 1809px #fff,
    54px 534px #fff, 810px 376px #fff, 188px 123px #fff, 1643px 602px #fff,
    1776px 1472px #fff, 1406px 1925px #fff, 718px 134px #fff, 525px 47px #fff,
    1241px 875px #fff, 948px 498px #fff, 74px 829px #fff, 1372px 372px #fff,
    1341px 1829px #fff, 586px 1418px #fff, 244px 1665px #fff, 1453px 1926px #fff,
    963px 214px #fff, 1765px 683px #fff, 783px 1283px #fff, 1492px 1112px #fff,
    299px 1521px #fff, 909px 154px #fff, 600px 1827px #fff, 67px 699px #fff,
    953px 563px #fff, 1158px 362px #fff, 1788px 1279px #fff, 646px 803px #fff,
    2px 1534px #fff, 916px 1486px #fff, 913px 49px #fff, 123px 536px #fff,
    1230px 1831px #fff, 1175px 1502px #fff, 278px 749px #fff, 274px 650px #fff,
    852px 1546px #fff, 1307px 668px #fff, 1818px 747px #fff, 737px 427px #fff,
    1158px 1693px #fff, 746px 525px #fff, 1929px 201px #fff, 1866px 1736px #fff,
    1925px 46px #fff, 104px 1536px #fff, 27px 102px #fff, 1426px 1756px #fff,
    1733px 1179px #fff, 499px 1866px #fff, 1900px 1843px #fff, 1207px 780px #fff,
    1132px 895px #fff, 182px 1771px #fff, 19px 489px #fff, 1006px 1919px #fff,
    1183px 570px #fff, 533px 125px #fff, 957px 880px #fff, 130px 474px #fff,
    714px 144px #fff, 1073px 1899px #fff, 1580px 462px #fff, 500px 730px #fff,
    927px 1645px #fff, 1651px 724px #fff, 1185px 972px #fff, 1490px 212px #fff,
    1762px 193px #fff, 538px 470px #fff, 1163px 1103px #fff, 857px 1270px #fff,
    1926px 728px #fff, 73px 1096px #fff, 191px 1112px #fff, 667px 1397px #fff,
    766px 1093px #fff, 850px 58px #fff, 492px 25px #fff, 831px 11px #fff,
    1066px 1717px #fff, 410px 1337px #fff, 738px 1856px #fff, 411px 285px #fff,
    992px 818px #fff, 391px 998px #fff, 799px 1669px #fff, 828px 144px #fff,
    1704px 612px #fff, 823px 1741px #fff, 1959px 289px #fff, 1437px 1750px #fff,
    923px 1356px #fff, 1848px 1791px #fff, 1378px 665px #fff, 129px 1822px #fff,
    961px 1497px #fff, 330px 651px #fff, 1954px 1369px #fff, 1941px 1854px #fff,
    1451px 1127px #fff, 265px 347px #fff, 623px 1887px #fff, 479px 1886px #fff,
    1223px 289px #fff, 1967px 451px #fff, 1981px 1317px #fff, 1285px 999px #fff,
    1613px 1504px #fff, 1767px 430px #fff, 1290px 1720px #fff, 1725px 308px #fff,
    1726px 684px #fff, 1829px 399px #fff, 1600px 1686px #fff, 945px 561px #fff,
    752px 413px #fff, 1801px 60px #fff, 1522px 1358px #fff, 1060px 765px #fff,
    1605px 553px #fff, 64px 1098px #fff, 1633px 1327px #fff, 1457px 1307px #fff,
    389px 1203px #fff, 224px 1094px #fff, 613px 1737px #fff, 916px 256px #fff,
    1838px 152px #fff, 1786px 1565px #fff, 1583px 983px #fff, 1587px 104px #fff,
    736px 1039px #fff, 1576px 831px #fff, 1361px 346px #fff, 311px 1734px #fff,
    1609px 862px #fff, 1751px 150px #fff, 1924px 247px #fff, 148px 1558px #fff,
    1463px 593px #fff, 531px 49px #fff, 867px 477px #fff, 281px 1919px #fff,
    1932px 1213px #fff, 340px 387px #fff, 1545px 1860px #fff, 532px 1620px #fff,
    1945px 1916px #fff, 1753px 353px #fff, 9px 1617px #fff, 271px 1898px #fff,
    834px 842px #fff, 873px 1852px #fff, 506px 439px #fff, 1069px 239px #fff,
    983px 1382px #fff, 1957px 1426px #fff, 292px 1556px #fff, 307px 1056px #fff,
    1774px 680px #fff, 822px 1391px #fff, 112px 1595px #fff, 134px 853px #fff,
    1688px 677px #fff, 1471px 1231px #fff, 626px 1216px #fff, 820px 1761px #fff,
    203px 441px #fff, 1318px 877px #fff, 76px 568px #fff, 1607px 286px #fff,
    1217px 1606px #fff, 558px 1781px #fff, 1881px 1867px #fff,
    1773px 1806px #fff, 218px 1874px #fff, 352px 795px #fff, 83px 1884px #fff,
    1674px 712px #fff, 743px 639px #fff, 968px 1458px #fff, 1546px 457px #fff,
    1197px 1042px #fff, 1353px 331px #fff, 1538px 1835px #fff,
    1199px 1231px #fff, 489px 288px #fff, 1344px 1596px #fff, 1600px 672px #fff,
    642px 1088px #fff, 659px 772px #fff, 991px 156px #fff, 1782px 1450px #fff,
    1971px 1513px #fff, 1537px 858px #fff, 1272px 721px #fff, 733px 715px #fff,
    968px 1304px #fff, 1784px 1813px #fff, 1735px 1034px #fff, 477px 1403px #fff,
    1761px 1228px #fff, 230px 1709px #fff, 1717px 545px #fff, 1304px 1658px #fff,
    433px 111px #fff, 307px 169px #fff, 517px 1812px #fff, 1378px 617px #fff,
    657px 23px #fff, 460px 372px #fff, 1490px 203px #fff, 1941px 1664px #fff,
    417px 1419px #fff;
  animation: animStar 50s linear infinite;
}
#stars:after {
  content: ' ';
  position: absolute;
  top: 2000px;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 219px 1294px #fff, 1082px 705px #fff, 1334px 1111px #fff,
    1321px 1002px #fff, 811px 592px #fff, 669px 43px #fff, 1119px 1768px #fff,
    68px 1410px #fff, 1772px 1996px #fff, 1685px 557px #fff, 1976px 1094px #fff,
    1212px 1191px #fff, 436px 1235px #fff, 791px 1290px #fff, 407px 514px #fff,
    672px 534px #fff, 395px 302px #fff, 115px 1111px #fff, 1728px 174px #fff,
    515px 1122px #fff, 639px 1906px #fff, 548px 439px #fff, 996px 1264px #fff,
    507px 1421px #fff, 1427px 288px #fff, 1234px 1336px #fff, 1534px 1105px #fff,
    354px 1643px #fff, 730px 1808px #fff, 365px 291px #fff, 129px 1579px #fff,
    246px 1559px #fff, 443px 1070px #fff, 1108px 1012px #fff, 1136px 1865px #fff,
    806px 331px #fff, 318px 1645px #fff, 883px 665px #fff, 225px 1421px #fff,
    1198px 835px #fff, 514px 318px #fff, 1054px 175px #fff, 1018px 251px #fff,
    1939px 1756px #fff, 185px 817px #fff, 1962px 535px #fff, 1758px 1008px #fff,
    1482px 612px #fff, 1262px 1260px #fff, 60px 892px #fff, 692px 552px #fff,
    1015px 759px #fff, 1916px 455px #fff, 208px 705px #fff, 711px 325px #fff,
    1706px 1082px #fff, 1288px 717px #fff, 1304px 182px #fff, 1989px 929px #fff,
    693px 117px #fff, 1026px 1406px #fff, 1273px 1497px #fff, 521px 1497px #fff,
    263px 330px #fff, 1204px 1805px #fff, 1100px 889px #fff, 292px 1006px #fff,
    1731px 1402px #fff, 296px 362px #fff, 307px 1710px #fff, 260px 1477px #fff,
    436px 348px #fff, 277px 873px #fff, 1526px 907px #fff, 852px 567px #fff,
    1046px 1168px #fff, 1744px 1086px #fff, 1563px 651px #fff, 1275px 898px #fff,
    1768px 1642px #fff, 1098px 581px #fff, 265px 617px #fff, 803px 695px #fff,
    279px 1068px #fff, 771px 1359px #fff, 1177px 26px #fff, 1859px 52px #fff,
    1457px 1354px #fff, 1766px 1016px #fff, 1143px 636px #fff, 820px 1421px #fff,
    1590px 1317px #fff, 1230px 250px #fff, 998px 1963px #fff, 439px 1302px #fff,
    95px 522px #fff, 1659px 1962px #fff, 409px 437px #fff, 1955px 200px #fff,
    684px 660px #fff, 348px 1394px #fff, 305px 1392px #fff, 1839px 531px #fff,
    102px 1687px #fff, 138px 394px #fff, 1210px 17px #fff, 1775px 593px #fff,
    1698px 31px #fff, 1647px 339px #fff, 1839px 1441px #fff, 867px 1028px #fff,
    1805px 440px #fff, 1684px 176px #fff, 819px 364px #fff, 616px 1934px #fff,
    587px 1212px #fff, 341px 1935px #fff, 418px 1773px #fff, 1140px 1995px #fff,
    374px 554px #fff, 1996px 488px #fff, 316px 953px #fff, 536px 500px #fff,
    811px 707px #fff, 1638px 494px #fff, 481px 644px #fff, 33px 1873px #fff,
    1880px 1508px #fff, 946px 1917px #fff, 81px 1296px #fff, 1962px 146px #fff,
    1658px 988px #fff, 132px 142px #fff, 170px 2px #fff, 89px 1109px #fff,
    356px 911px #fff, 906px 1492px #fff, 969px 1436px #fff, 917px 699px #fff,
    328px 1369px #fff, 1291px 517px #fff, 393px 1617px #fff, 1194px 613px #fff,
    1821px 1597px #fff, 1396px 661px #fff, 455px 688px #fff, 160px 433px #fff,
    1689px 406px #fff, 1987px 1523px #fff, 934px 1015px #fff, 22px 258px #fff,
    396px 1766px #fff, 1681px 1469px #fff, 1513px 264px #fff, 149px 1793px #fff,
    1455px 250px #fff, 1584px 1969px #fff, 1690px 1578px #fff,
    1588px 1588px #fff, 1181px 1792px #fff, 1220px 897px #fff,
    1658px 1783px #fff, 1965px 1437px #fff, 1142px 167px #fff, 1086px 502px #fff,
    1300px 89px #fff, 727px 902px #fff, 546px 1165px #fff, 1378px 1956px #fff,
    451px 87px #fff, 1014px 502px #fff, 228px 1567px #fff, 417px 1121px #fff,
    365px 1730px #fff, 1954px 475px #fff, 1596px 747px #fff, 1084px 923px #fff,
    1989px 1991px #fff, 626px 1404px #fff, 951px 1497px #fff, 630px 1187px #fff,
    769px 634px #fff, 253px 927px #fff, 1926px 96px #fff, 744px 1789px #fff,
    1606px 1500px #fff, 1625px 1086px #fff, 388px 687px #fff, 1253px 829px #fff,
    1664px 1654px #fff, 1597px 1191px #fff, 487px 1416px #fff, 890px 749px #fff,
    942px 867px #fff, 189px 577px #fff, 106px 1071px #fff, 506px 84px #fff,
    1568px 1721px #fff, 578px 757px #fff, 1997px 146px #fff, 1485px 348px #fff,
    803px 1924px #fff, 317px 946px #fff, 476px 125px #fff, 934px 855px #fff,
    1699px 878px #fff, 1584px 843px #fff, 1990px 484px #fff, 829px 1452px #fff,
    824px 802px #fff, 146px 1031px #fff, 1871px 224px #fff, 1255px 1953px #fff,
    1517px 1509px #fff, 1865px 973px #fff, 801px 1535px #fff, 100px 1464px #fff,
    375px 22px #fff, 1049px 647px #fff, 971px 1px #fff, 1930px 651px #fff,
    1139px 683px #fff, 1924px 488px #fff, 382px 495px #fff, 1984px 124px #fff,
    1453px 533px #fff, 962px 1828px #fff, 434px 1925px #fff, 459px 455px #fff,
    8px 1649px #fff, 1411px 667px #fff, 1379px 1893px #fff, 140px 15px #fff,
    1719px 873px #fff, 242px 1961px #fff, 887px 382px #fff, 1834px 121px #fff,
    1992px 625px #fff, 780px 1253px #fff, 1024px 204px #fff, 1307px 1615px #fff,
    1605px 171px #fff, 1939px 1867px #fff, 952px 1689px #fff, 27px 100px #fff,
    613px 1961px #fff, 345px 1783px #fff, 310px 1145px #fff, 1202px 1590px #fff,
    1417px 886px #fff, 150px 956px #fff, 911px 1882px #fff, 103px 1478px #fff,
    1073px 1853px #fff, 1891px 1139px #fff, 529px 1579px #fff, 1847px 827px #fff,
    1935px 992px #fff, 421px 1069px #fff, 888px 1067px #fff, 1726px 1563px #fff,
    1333px 1215px #fff, 1333px 615px #fff, 1318px 1051px #fff, 1744px 828px #fff,
    248px 839px #fff, 1209px 1736px #fff, 184px 202px #fff, 1817px 197px #fff,
    1598px 28px #fff, 1750px 1974px #fff, 131px 388px #fff, 723px 1305px #fff,
    1146px 1945px #fff, 113px 975px #fff, 1280px 991px #fff, 675px 1899px #fff,
    1117px 977px #fff, 1132px 736px #fff, 1119px 1355px #fff, 190px 411px #fff,
    1675px 1226px #fff, 544px 1380px #fff, 1541px 77px #fff, 1799px 1462px #fff,
    149px 1585px #fff, 1164px 344px #fff, 1762px 46px #fff, 1355px 1498px #fff,
    848px 1807px #fff, 1496px 1620px #fff, 733px 597px #fff, 1833px 1980px #fff,
    725px 1192px #fff, 608px 224px #fff, 1011px 1962px #fff, 1247px 224px #fff,
    563px 1455px #fff, 67px 694px #fff, 1165px 1711px #fff, 1301px 311px #fff,
    1978px 1296px #fff, 724px 1050px #fff, 378px 1446px #fff, 1755px 1313px #fff,
    1193px 1626px #fff, 381px 1903px #fff, 898px 791px #fff, 1880px 1653px #fff,
    481px 695px #fff, 207px 834px #fff, 1803px 144px #fff, 702px 1325px #fff,
    1198px 1684px #fff, 218px 385px #fff, 1465px 1602px #fff, 850px 1123px #fff,
    1079px 1537px #fff, 1498px 1646px #fff, 819px 1883px #fff, 747px 789px #fff,
    774px 1763px #fff, 1749px 506px #fff, 1572px 1416px #fff, 576px 39px #fff,
    584px 817px #fff, 29px 1918px #fff, 1821px 1722px #fff, 409px 609px #fff,
    1169px 1083px #fff, 1308px 891px #fff, 1190px 31px #fff, 83px 242px #fff,
    863px 1654px #fff, 18px 789px #fff, 1238px 239px #fff, 1421px 1757px #fff,
    310px 1271px #fff, 80px 1454px #fff, 1138px 1458px #fff, 861px 533px #fff,
    1347px 268px #fff, 1633px 1406px #fff, 539px 1365px #fff, 77px 162px #fff,
    323px 1612px #fff, 1944px 816px #fff, 1480px 479px #fff, 381px 1231px #fff,
    85px 1441px #fff, 501px 1074px #fff, 1596px 1284px #fff, 815px 1009px #fff,
    92px 393px #fff, 1367px 299px #fff, 518px 115px #fff, 295px 709px #fff,
    507px 28px #fff, 777px 212px #fff, 197px 1136px #fff, 1086px 1703px #fff,
    453px 1861px #fff, 1623px 356px #fff, 99px 411px #fff, 932px 1127px #fff,
    1489px 1320px #fff, 85px 449px #fff, 743px 140px #fff, 769px 1834px #fff,
    1041px 1923px #fff, 1721px 1234px #fff, 623px 220px #fff, 231px 409px #fff,
    1363px 1257px #fff, 616px 1720px #fff, 1247px 289px #fff, 1762px 1312px #fff,
    1495px 361px #fff, 788px 529px #fff, 801px 1779px #fff, 1109px 1761px #fff,
    1033px 179px #fff, 440px 824px #fff, 993px 1128px #fff, 926px 910px #fff,
    883px 1435px #fff, 171px 659px #fff, 1871px 1753px #fff, 1724px 983px #fff,
    1990px 1598px #fff, 1819px 687px #fff, 1514px 978px #fff, 212px 1586px #fff,
    484px 1224px #fff, 766px 193px #fff, 1707px 307px #fff, 1832px 1893px #fff,
    1859px 95px #fff, 1576px 35px #fff, 502px 130px #fff, 274px 991px #fff,
    266px 375px #fff, 887px 470px #fff, 1314px 356px #fff, 1380px 831px #fff,
    348px 4px #fff, 1773px 1644px #fff, 1554px 1207px #fff, 1352px 1377px #fff,
    1109px 1603px #fff, 1517px 305px #fff, 1218px 892px #fff, 531px 1651px #fff,
    1853px 1947px #fff, 613px 1975px #fff, 856px 940px #fff, 398px 770px #fff,
    1985px 126px #fff, 1061px 501px #fff, 1034px 444px #fff, 1389px 297px #fff,
    523px 1665px #fff, 1027px 1207px #fff, 1744px 394px #fff, 1967px 1347px #fff,
    1944px 1216px #fff, 1742px 35px #fff, 1817px 1983px #fff, 339px 1445px #fff,
    803px 46px #fff, 1878px 488px #fff, 630px 1271px #fff, 734px 103px #fff,
    285px 660px #fff, 123px 1200px #fff, 1035px 1646px #fff, 1306px 1090px #fff,
    1183px 1496px #fff, 1083px 768px #fff, 1547px 1107px #fff, 22px 664px #fff,
    1820px 835px #fff, 1820px 947px #fff, 959px 1972px #fff, 1464px 1203px #fff,
    234px 1991px #fff, 188px 545px #fff, 429px 266px #fff, 1721px 560px #fff,
    1207px 577px #fff, 921px 1175px #fff, 430px 777px #fff, 857px 411px #fff,
    891px 1495px #fff, 311px 233px #fff, 1401px 496px #fff, 1979px 1956px #fff,
    1753px 605px #fff, 1014px 178px #fff, 1456px 1439px #fff, 239px 1414px #fff,
    105px 711px #fff, 64px 1648px #fff, 584px 999px #fff, 1323px 513px #fff,
    1482px 1503px #fff, 483px 862px #fff, 1725px 63px #fff, 318px 909px #fff,
    255px 789px #fff, 1376px 1746px #fff, 14px 1044px #fff, 1418px 720px #fff,
    1295px 422px #fff, 838px 1984px #fff, 138px 1330px #fff, 1627px 1789px #fff,
    605px 234px #fff, 545px 1988px #fff, 1563px 1537px #fff, 1003px 973px #fff,
    139px 1944px #fff, 649px 1365px #fff, 245px 1440px #fff, 1722px 1809px #fff,
    54px 534px #fff, 810px 376px #fff, 188px 123px #fff, 1643px 602px #fff,
    1776px 1472px #fff, 1406px 1925px #fff, 718px 134px #fff, 525px 47px #fff,
    1241px 875px #fff, 948px 498px #fff, 74px 829px #fff, 1372px 372px #fff,
    1341px 1829px #fff, 586px 1418px #fff, 244px 1665px #fff, 1453px 1926px #fff,
    963px 214px #fff, 1765px 683px #fff, 783px 1283px #fff, 1492px 1112px #fff,
    299px 1521px #fff, 909px 154px #fff, 600px 1827px #fff, 67px 699px #fff,
    953px 563px #fff, 1158px 362px #fff, 1788px 1279px #fff, 646px 803px #fff,
    2px 1534px #fff, 916px 1486px #fff, 913px 49px #fff, 123px 536px #fff,
    1230px 1831px #fff, 1175px 1502px #fff, 278px 749px #fff, 274px 650px #fff,
    852px 1546px #fff, 1307px 668px #fff, 1818px 747px #fff, 737px 427px #fff,
    1158px 1693px #fff, 746px 525px #fff, 1929px 201px #fff, 1866px 1736px #fff,
    1925px 46px #fff, 104px 1536px #fff, 27px 102px #fff, 1426px 1756px #fff,
    1733px 1179px #fff, 499px 1866px #fff, 1900px 1843px #fff, 1207px 780px #fff,
    1132px 895px #fff, 182px 1771px #fff, 19px 489px #fff, 1006px 1919px #fff,
    1183px 570px #fff, 533px 125px #fff, 957px 880px #fff, 130px 474px #fff,
    714px 144px #fff, 1073px 1899px #fff, 1580px 462px #fff, 500px 730px #fff,
    927px 1645px #fff, 1651px 724px #fff, 1185px 972px #fff, 1490px 212px #fff,
    1762px 193px #fff, 538px 470px #fff, 1163px 1103px #fff, 857px 1270px #fff,
    1926px 728px #fff, 73px 1096px #fff, 191px 1112px #fff, 667px 1397px #fff,
    766px 1093px #fff, 850px 58px #fff, 492px 25px #fff, 831px 11px #fff,
    1066px 1717px #fff, 410px 1337px #fff, 738px 1856px #fff, 411px 285px #fff,
    992px 818px #fff, 391px 998px #fff, 799px 1669px #fff, 828px 144px #fff,
    1704px 612px #fff, 823px 1741px #fff, 1959px 289px #fff, 1437px 1750px #fff,
    923px 1356px #fff, 1848px 1791px #fff, 1378px 665px #fff, 129px 1822px #fff,
    961px 1497px #fff, 330px 651px #fff, 1954px 1369px #fff, 1941px 1854px #fff,
    1451px 1127px #fff, 265px 347px #fff, 623px 1887px #fff, 479px 1886px #fff,
    1223px 289px #fff, 1967px 451px #fff, 1981px 1317px #fff, 1285px 999px #fff,
    1613px 1504px #fff, 1767px 430px #fff, 1290px 1720px #fff, 1725px 308px #fff,
    1726px 684px #fff, 1829px 399px #fff, 1600px 1686px #fff, 945px 561px #fff,
    752px 413px #fff, 1801px 60px #fff, 1522px 1358px #fff, 1060px 765px #fff,
    1605px 553px #fff, 64px 1098px #fff, 1633px 1327px #fff, 1457px 1307px #fff,
    389px 1203px #fff, 224px 1094px #fff, 613px 1737px #fff, 916px 256px #fff,
    1838px 152px #fff, 1786px 1565px #fff, 1583px 983px #fff, 1587px 104px #fff,
    736px 1039px #fff, 1576px 831px #fff, 1361px 346px #fff, 311px 1734px #fff,
    1609px 862px #fff, 1751px 150px #fff, 1924px 247px #fff, 148px 1558px #fff,
    1463px 593px #fff, 531px 49px #fff, 867px 477px #fff, 281px 1919px #fff,
    1932px 1213px #fff, 340px 387px #fff, 1545px 1860px #fff, 532px 1620px #fff,
    1945px 1916px #fff, 1753px 353px #fff, 9px 1617px #fff, 271px 1898px #fff,
    834px 842px #fff, 873px 1852px #fff, 506px 439px #fff, 1069px 239px #fff,
    983px 1382px #fff, 1957px 1426px #fff, 292px 1556px #fff, 307px 1056px #fff,
    1774px 680px #fff, 822px 1391px #fff, 112px 1595px #fff, 134px 853px #fff,
    1688px 677px #fff, 1471px 1231px #fff, 626px 1216px #fff, 820px 1761px #fff,
    203px 441px #fff, 1318px 877px #fff, 76px 568px #fff, 1607px 286px #fff,
    1217px 1606px #fff, 558px 1781px #fff, 1881px 1867px #fff,
    1773px 1806px #fff, 218px 1874px #fff, 352px 795px #fff, 83px 1884px #fff,
    1674px 712px #fff, 743px 639px #fff, 968px 1458px #fff, 1546px 457px #fff,
    1197px 1042px #fff, 1353px 331px #fff, 1538px 1835px #fff,
    1199px 1231px #fff, 489px 288px #fff, 1344px 1596px #fff, 1600px 672px #fff,
    642px 1088px #fff, 659px 772px #fff, 991px 156px #fff, 1782px 1450px #fff,
    1971px 1513px #fff, 1537px 858px #fff, 1272px 721px #fff, 733px 715px #fff,
    968px 1304px #fff, 1784px 1813px #fff, 1735px 1034px #fff, 477px 1403px #fff,
    1761px 1228px #fff, 230px 1709px #fff, 1717px 545px #fff, 1304px 1658px #fff,
    433px 111px #fff, 307px 169px #fff, 517px 1812px #fff, 1378px 617px #fff,
    657px 23px #fff, 460px 372px #fff, 1490px 203px #fff, 1941px 1664px #fff,
    417px 1419px #fff;
}

#stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 847px 1207px #fff, 1245px 758px #fff, 1848px 130px #fff,
    984px 979px #fff, 516px 1014px #fff, 1505px 16px #fff, 1490px 1597px #fff,
    1026px 1794px #fff, 793px 1202px #fff, 1337px 967px #fff, 170px 1691px #fff,
    521px 1043px #fff, 1321px 1882px #fff, 1300px 1019px #fff, 757px 1230px #fff,
    1976px 1181px #fff, 1275px 292px #fff, 1803px 321px #fff, 1970px 1368px #fff,
    1990px 1651px #fff, 410px 512px #fff, 457px 456px #fff, 186px 1427px #fff,
    1074px 1974px #fff, 1483px 1791px #fff, 806px 1649px #fff, 209px 639px #fff,
    1907px 279px #fff, 509px 605px #fff, 1380px 1070px #fff, 1098px 1465px #fff,
    733px 1950px #fff, 1530px 1842px #fff, 1666px 1541px #fff, 1535px 637px #fff,
    1494px 329px #fff, 862px 1190px #fff, 890px 1778px #fff, 818px 555px #fff,
    1055px 1676px #fff, 1179px 1442px #fff, 36px 1169px #fff, 1705px 1016px #fff,
    1193px 1813px #fff, 750px 1922px #fff, 1353px 559px #fff, 625px 1846px #fff,
    1654px 1065px #fff, 1825px 1328px #fff, 1311px 160px #fff, 184px 865px #fff,
    1526px 1573px #fff, 1329px 778px #fff, 800px 1317px #fff, 1459px 1157px #fff,
    1732px 363px #fff, 1706px 227px #fff, 1229px 310px #fff, 1086px 1959px #fff,
    1823px 1974px #fff, 1392px 1218px #fff, 1269px 1810px #fff, 446px 31px #fff,
    1944px 726px #fff, 1943px 592px #fff, 1561px 910px #fff, 842px 1704px #fff,
    92px 1130px #fff, 387px 246px #fff, 67px 822px #fff, 1656px 1174px #fff,
    1076px 1125px #fff, 1862px 607px #fff, 1256px 738px #fff, 1093px 967px #fff,
    1718px 391px #fff, 1855px 1559px #fff, 571px 126px #fff, 1786px 744px #fff,
    1995px 1965px #fff, 1238px 1892px #fff, 1067px 1337px #fff, 668px 584px #fff,
    487px 173px #fff, 165px 298px #fff, 446px 585px #fff, 1784px 349px #fff,
    423px 1697px #fff, 1004px 1633px #fff, 732px 383px #fff, 1121px 1248px #fff,
    822px 1776px #fff, 1424px 869px #fff, 482px 732px #fff, 487px 1749px #fff,
    1812px 1985px #fff, 783px 1895px #fff, 572px 778px #fff, 1914px 1390px #fff,
    1539px 981px #fff, 1301px 1415px #fff, 954px 493px #fff, 1372px 294px #fff,
    1253px 340px #fff, 1019px 887px #fff, 1285px 153px #fff, 837px 1221px #fff,
    1326px 1699px #fff, 155px 1655px #fff, 118px 1474px #fff, 522px 1654px #fff,
    411px 1424px #fff, 1958px 1418px #fff, 748px 374px #fff, 30px 1789px #fff,
    1663px 1646px #fff, 1250px 30px #fff, 1680px 857px #fff, 83px 1702px #fff,
    581px 670px #fff, 825px 576px #fff, 1540px 1010px #fff, 420px 1583px #fff,
    29px 1923px #fff, 1542px 988px #fff, 292px 319px #fff, 358px 994px #fff,
    1164px 200px #fff, 1499px 300px #fff, 1379px 278px #fff, 1334px 1070px #fff,
    251px 1878px #fff, 1917px 901px #fff, 891px 1450px #fff, 716px 1316px #fff,
    1122px 1394px #fff, 210px 1356px #fff, 1981px 1246px #fff, 173px 1400px #fff,
    1307px 1097px #fff, 1843px 353px #fff, 1571px 123px #fff, 1145px 1822px #fff,
    511px 1952px #fff, 1017px 931px #fff, 1672px 714px #fff, 1509px 158px #fff,
    551px 8px #fff, 92px 1675px #fff, 1592px 1678px #fff, 681px 1840px #fff,
    946px 1905px #fff, 371px 1798px #fff, 1770px 1147px #fff, 747px 579px #fff,
    567px 1650px #fff, 22px 594px #fff, 373px 708px #fff, 739px 1137px #fff,
    1506px 731px #fff, 435px 312px #fff, 805px 1398px #fff, 1695px 965px #fff,
    540px 1192px #fff, 83px 743px #fff, 427px 389px #fff, 1713px 1435px #fff,
    1654px 1369px #fff, 1082px 1168px #fff, 450px 1673px #fff, 233px 1975px #fff,
    1380px 702px #fff, 747px 632px #fff, 1171px 1851px #fff, 1577px 980px #fff,
    771px 1731px #fff, 839px 1441px #fff, 1413px 541px #fff, 1921px 1804px #fff,
    559px 1996px #fff, 1288px 283px #fff, 588px 1559px #fff, 196px 677px #fff,
    685px 1750px #fff, 1156px 1258px #fff, 256px 632px #fff, 928px 180px #fff,
    181px 1395px #fff, 1902px 1542px #fff, 261px 1123px #fff, 622px 418px #fff,
    588px 827px #fff, 979px 267px #fff, 1530px 1895px #fff, 530px 1535px #fff,
    753px 931px #fff, 1991px 1370px #fff, 1506px 623px #fff, 1045px 517px #fff,
    757px 1365px #fff;
  animation: animStar 100s linear infinite;
}
#stars2:after {
  content: ' ';
  position: absolute;
  top: 2000px;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 847px 1207px #fff, 1245px 758px #fff, 1848px 130px #fff,
    984px 979px #fff, 516px 1014px #fff, 1505px 16px #fff, 1490px 1597px #fff,
    1026px 1794px #fff, 793px 1202px #fff, 1337px 967px #fff, 170px 1691px #fff,
    521px 1043px #fff, 1321px 1882px #fff, 1300px 1019px #fff, 757px 1230px #fff,
    1976px 1181px #fff, 1275px 292px #fff, 1803px 321px #fff, 1970px 1368px #fff,
    1990px 1651px #fff, 410px 512px #fff, 457px 456px #fff, 186px 1427px #fff,
    1074px 1974px #fff, 1483px 1791px #fff, 806px 1649px #fff, 209px 639px #fff,
    1907px 279px #fff, 509px 605px #fff, 1380px 1070px #fff, 1098px 1465px #fff,
    733px 1950px #fff, 1530px 1842px #fff, 1666px 1541px #fff, 1535px 637px #fff,
    1494px 329px #fff, 862px 1190px #fff, 890px 1778px #fff, 818px 555px #fff,
    1055px 1676px #fff, 1179px 1442px #fff, 36px 1169px #fff, 1705px 1016px #fff,
    1193px 1813px #fff, 750px 1922px #fff, 1353px 559px #fff, 625px 1846px #fff,
    1654px 1065px #fff, 1825px 1328px #fff, 1311px 160px #fff, 184px 865px #fff,
    1526px 1573px #fff, 1329px 778px #fff, 800px 1317px #fff, 1459px 1157px #fff,
    1732px 363px #fff, 1706px 227px #fff, 1229px 310px #fff, 1086px 1959px #fff,
    1823px 1974px #fff, 1392px 1218px #fff, 1269px 1810px #fff, 446px 31px #fff,
    1944px 726px #fff, 1943px 592px #fff, 1561px 910px #fff, 842px 1704px #fff,
    92px 1130px #fff, 387px 246px #fff, 67px 822px #fff, 1656px 1174px #fff,
    1076px 1125px #fff, 1862px 607px #fff, 1256px 738px #fff, 1093px 967px #fff,
    1718px 391px #fff, 1855px 1559px #fff, 571px 126px #fff, 1786px 744px #fff,
    1995px 1965px #fff, 1238px 1892px #fff, 1067px 1337px #fff, 668px 584px #fff,
    487px 173px #fff, 165px 298px #fff, 446px 585px #fff, 1784px 349px #fff,
    423px 1697px #fff, 1004px 1633px #fff, 732px 383px #fff, 1121px 1248px #fff,
    822px 1776px #fff, 1424px 869px #fff, 482px 732px #fff, 487px 1749px #fff,
    1812px 1985px #fff, 783px 1895px #fff, 572px 778px #fff, 1914px 1390px #fff,
    1539px 981px #fff, 1301px 1415px #fff, 954px 493px #fff, 1372px 294px #fff,
    1253px 340px #fff, 1019px 887px #fff, 1285px 153px #fff, 837px 1221px #fff,
    1326px 1699px #fff, 155px 1655px #fff, 118px 1474px #fff, 522px 1654px #fff,
    411px 1424px #fff, 1958px 1418px #fff, 748px 374px #fff, 30px 1789px #fff,
    1663px 1646px #fff, 1250px 30px #fff, 1680px 857px #fff, 83px 1702px #fff,
    581px 670px #fff, 825px 576px #fff, 1540px 1010px #fff, 420px 1583px #fff,
    29px 1923px #fff, 1542px 988px #fff, 292px 319px #fff, 358px 994px #fff,
    1164px 200px #fff, 1499px 300px #fff, 1379px 278px #fff, 1334px 1070px #fff,
    251px 1878px #fff, 1917px 901px #fff, 891px 1450px #fff, 716px 1316px #fff,
    1122px 1394px #fff, 210px 1356px #fff, 1981px 1246px #fff, 173px 1400px #fff,
    1307px 1097px #fff, 1843px 353px #fff, 1571px 123px #fff, 1145px 1822px #fff,
    511px 1952px #fff, 1017px 931px #fff, 1672px 714px #fff, 1509px 158px #fff,
    551px 8px #fff, 92px 1675px #fff, 1592px 1678px #fff, 681px 1840px #fff,
    946px 1905px #fff, 371px 1798px #fff, 1770px 1147px #fff, 747px 579px #fff,
    567px 1650px #fff, 22px 594px #fff, 373px 708px #fff, 739px 1137px #fff,
    1506px 731px #fff, 435px 312px #fff, 805px 1398px #fff, 1695px 965px #fff,
    540px 1192px #fff, 83px 743px #fff, 427px 389px #fff, 1713px 1435px #fff,
    1654px 1369px #fff, 1082px 1168px #fff, 450px 1673px #fff, 233px 1975px #fff,
    1380px 702px #fff, 747px 632px #fff, 1171px 1851px #fff, 1577px 980px #fff,
    771px 1731px #fff, 839px 1441px #fff, 1413px 541px #fff, 1921px 1804px #fff,
    559px 1996px #fff, 1288px 283px #fff, 588px 1559px #fff, 196px 677px #fff,
    685px 1750px #fff, 1156px 1258px #fff, 256px 632px #fff, 928px 180px #fff,
    181px 1395px #fff, 1902px 1542px #fff, 261px 1123px #fff, 622px 418px #fff,
    588px 827px #fff, 979px 267px #fff, 1530px 1895px #fff, 530px 1535px #fff,
    753px 931px #fff, 1991px 1370px #fff, 1506px 623px #fff, 1045px 517px #fff,
    757px 1365px #fff;
}

#stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 1683px 1995px #fff, 738px 412px #fff, 1735px 1650px #fff,
    969px 1676px #fff, 418px 1430px #fff, 977px 893px #fff, 682px 1517px #fff,
    160px 497px #fff, 763px 1139px #fff, 1750px 515px #fff, 1097px 1539px #fff,
    1218px 922px #fff, 1433px 66px #fff, 774px 490px #fff, 458px 1262px #fff,
    1598px 237px #fff, 456px 1776px #fff, 1969px 48px #fff, 1908px 318px #fff,
    1542px 1524px #fff, 1812px 247px #fff, 134px 573px #fff, 249px 1985px #fff,
    1849px 157px #fff, 602px 487px #fff, 309px 868px #fff, 1859px 1656px #fff,
    1899px 1951px #fff, 1705px 1860px #fff, 1595px 686px #fff, 1607px 273px #fff,
    394px 1471px #fff, 375px 1887px #fff, 372px 1984px #fff, 879px 648px #fff,
    1667px 1234px #fff, 1007px 1928px #fff, 1381px 529px #fff, 1320px 656px #fff,
    1540px 701px #fff, 870px 1920px #fff, 1285px 1775px #fff, 292px 1963px #fff,
    862px 1130px #fff, 436px 515px #fff, 1382px 1055px #fff, 974px 1846px #fff,
    294px 1110px #fff, 1732px 1773px #fff, 1076px 284px #fff, 350px 1049px #fff,
    1192px 1527px #fff, 521px 1087px #fff, 1450px 644px #fff, 1643px 1754px #fff,
    1633px 1936px #fff, 1439px 728px #fff, 225px 619px #fff, 1390px 897px #fff,
    474px 808px #fff, 1471px 1376px #fff, 986px 1056px #fff, 729px 1867px #fff,
    1770px 578px #fff, 984px 1227px #fff, 1455px 1865px #fff, 616px 345px #fff,
    598px 780px #fff, 905px 721px #fff, 898px 1347px #fff, 460px 569px #fff,
    1131px 70px #fff, 726px 1452px #fff, 1432px 1491px #fff, 1154px 892px #fff,
    61px 1759px #fff, 1526px 1777px #fff, 627px 315px #fff, 1425px 1470px #fff,
    1250px 328px #fff, 1059px 391px #fff, 485px 920px #fff, 1506px 1664px #fff,
    1491px 345px #fff, 1981px 798px #fff, 813px 835px #fff, 754px 544px #fff,
    1637px 1691px #fff, 1581px 1326px #fff, 530px 1865px #fff, 992px 1751px #fff,
    739px 1887px #fff, 1339px 1453px #fff, 412px 906px #fff, 1227px 1500px #fff,
    204px 712px #fff, 775px 188px #fff, 1401px 1638px #fff, 121px 862px #fff,
    223px 324px #fff;
  animation: animStar 150s linear infinite;
}
#stars3:after {
  content: ' ';
  position: absolute;
  top: 2000px;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 1683px 1995px #fff, 738px 412px #fff, 1735px 1650px #fff,
    969px 1676px #fff, 418px 1430px #fff, 977px 893px #fff, 682px 1517px #fff,
    160px 497px #fff, 763px 1139px #fff, 1750px 515px #fff, 1097px 1539px #fff,
    1218px 922px #fff, 1433px 66px #fff, 774px 490px #fff, 458px 1262px #fff,
    1598px 237px #fff, 456px 1776px #fff, 1969px 48px #fff, 1908px 318px #fff,
    1542px 1524px #fff, 1812px 247px #fff, 134px 573px #fff, 249px 1985px #fff,
    1849px 157px #fff, 602px 487px #fff, 309px 868px #fff, 1859px 1656px #fff,
    1899px 1951px #fff, 1705px 1860px #fff, 1595px 686px #fff, 1607px 273px #fff,
    394px 1471px #fff, 375px 1887px #fff, 372px 1984px #fff, 879px 648px #fff,
    1667px 1234px #fff, 1007px 1928px #fff, 1381px 529px #fff, 1320px 656px #fff,
    1540px 701px #fff, 870px 1920px #fff, 1285px 1775px #fff, 292px 1963px #fff,
    862px 1130px #fff, 436px 515px #fff, 1382px 1055px #fff, 974px 1846px #fff,
    294px 1110px #fff, 1732px 1773px #fff, 1076px 284px #fff, 350px 1049px #fff,
    1192px 1527px #fff, 521px 1087px #fff, 1450px 644px #fff, 1643px 1754px #fff,
    1633px 1936px #fff, 1439px 728px #fff, 225px 619px #fff, 1390px 897px #fff,
    474px 808px #fff, 1471px 1376px #fff, 986px 1056px #fff, 729px 1867px #fff,
    1770px 578px #fff, 984px 1227px #fff, 1455px 1865px #fff, 616px 345px #fff,
    598px 780px #fff, 905px 721px #fff, 898px 1347px #fff, 460px 569px #fff,
    1131px 70px #fff, 726px 1452px #fff, 1432px 1491px #fff, 1154px 892px #fff,
    61px 1759px #fff, 1526px 1777px #fff, 627px 315px #fff, 1425px 1470px #fff,
    1250px 328px #fff, 1059px 391px #fff, 485px 920px #fff, 1506px 1664px #fff,
    1491px 345px #fff, 1981px 798px #fff, 813px 835px #fff, 754px 544px #fff,
    1637px 1691px #fff, 1581px 1326px #fff, 530px 1865px #fff, 992px 1751px #fff,
    739px 1887px #fff, 1339px 1453px #fff, 412px 906px #fff, 1227px 1500px #fff,
    204px 712px #fff, 775px 188px #fff, 1401px 1638px #fff, 121px 862px #fff,
    223px 324px #fff;
}

@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}

.font_light {
  font-size: 26px;
  font-weight: 400;
}

.transform_business_wrapper .customArrow.transformBuusinessResponsiveBtn {
  display: none;
}
</style>
