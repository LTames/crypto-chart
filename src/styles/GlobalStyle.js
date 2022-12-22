import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.mainBackground};
    background-image: radial-gradient(60% 80% at 50% 0%, rgba(136,0,239, 0.15) 0%, rgba(52,42,53, 0.05) 100%);
    background-repeat: no-repeat;
  }

  ul {
    list-style: none;
  }

  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
    width: 100%;
  }

  button {
    border: none;
    cursor: pointer;
  }

  .stars, .stars2, .stars3 {
    --star: ${({ theme }) => theme.colors.stars};
  }

  .stars {
    width: 1px;
    height: 1px;
    animation: starsAnimation 40s linear infinite;
    box-shadow: 779px 1331px var(--star), 324px 42px var(--star), 303px 586px var(--star),
    1312px 276px var(--star), 451px 625px var(--star), 521px 1931px var(--star), 1087px 1871px var(--star),
    36px 1546px var(--star), 132px 934px var(--star), 1698px 901px var(--star), 1418px 664px var(--star),
    1448px 1157px var(--star), 1084px 232px var(--star), 347px 1776px var(--star), 1722px 243px var(--star),
    1629px 835px var(--star), 479px 969px var(--star), 1231px 960px var(--star), 586px 384px var(--star),
    164px 527px var(--star), 8px 646px var(--star), 1150px 1126px var(--star), 665px 1357px var(--star),
    1556px 1982px var(--star), 1260px 1961px var(--star), 1675px 1741px var(--star),
    1843px 1514px var(--star), 718px 1628px var(--star), 242px 1343px var(--star), 1497px 1880px var(--star),
    1364px 230px var(--star), 1739px 1302px var(--star), 636px 959px var(--star), 304px 686px var(--star),
    614px 751px var(--star), 1935px 816px var(--star), 1428px 60px var(--star), 355px 335px var(--star),
    1594px 158px var(--star), 90px 60px var(--star), 1553px 162px var(--star), 1239px 1825px var(--star),
    1945px 587px var(--star), 749px 1785px var(--star), 1987px 1172px var(--star), 1301px 1237px var(--star),
    1039px 342px var(--star), 1585px 1481px var(--star), 995px 1048px var(--star), 524px 932px var(--star),
    214px 413px var(--star), 1701px 1300px var(--star), 1037px 1613px var(--star), 1871px 996px var(--star),
    1360px 1635px var(--star), 1110px 1313px var(--star), 412px 1783px var(--star), 1949px 177px var(--star),
    903px 1854px var(--star), 700px 1936px var(--star), 378px 125px var(--star), 308px 834px var(--star),
    1118px 962px var(--star), 1350px 1929px var(--star), 781px 1811px var(--star), 561px 137px var(--star),
    757px 1148px var(--star), 1670px 1979px var(--star), 343px 739px var(--star), 945px 795px var(--star),
    576px 1903px var(--star), 1078px 1436px var(--star), 1583px 450px var(--star), 1366px 474px var(--star),
    297px 1873px var(--star), 192px 162px var(--star), 1624px 1633px var(--star), 59px 453px var(--star),
    82px 1872px var(--star), 1933px 498px var(--star), 1966px 1974px var(--star), 1975px 1688px var(--star),
    779px 314px var(--star), 1858px 1543px var(--star), 73px 1507px var(--star), 1693px 975px var(--star),
    1683px 108px var(--star), 1768px 1654px var(--star), 654px 14px var(--star), 494px 171px var(--star),
    1689px 1895px var(--star), 1660px 263px var(--star), 1031px 903px var(--star), 1203px 1393px var(--star),
    1333px 1421px var(--star), 1113px 41px var(--star), 1206px 1645px var(--star), 1325px 1635px var(--star),
    142px 388px var(--star), 572px 215px var(--star), 1535px 296px var(--star), 1419px 407px var(--star),
    1379px 1003px var(--star), 329px 469px var(--star), 1791px 1652px var(--star), 935px 1802px var(--star),
    1330px 1820px var(--star), 421px 1933px var(--star), 828px 365px var(--star), 275px 316px var(--star),
    707px 960px var(--star), 1605px 1554px var(--star), 625px 58px var(--star), 717px 1697px var(--star),
    1669px 246px var(--star), 1925px 322px var(--star), 1154px 1803px var(--star), 1929px 295px var(--star),
    1248px 240px var(--star), 1045px 1755px var(--star), 166px 942px var(--star), 1888px 1773px var(--star),
    678px 1963px var(--star), 1370px 569px var(--star), 1974px 1400px var(--star), 1786px 460px var(--star),
    51px 307px var(--star), 784px 1400px var(--star), 730px 1258px var(--star), 1712px 393px var(--star),
    416px 170px var(--star), 1797px 1932px var(--star), 572px 219px var(--star), 1557px 1856px var(--star),
    218px 8px var(--star), 348px 1334px var(--star), 469px 413px var(--star), 385px 1738px var(--star),
    1357px 1818px var(--star), 240px 942px var(--star), 248px 1847px var(--star), 1535px 806px var(--star),
    236px 1514px var(--star), 1429px 1556px var(--star), 73px 1633px var(--star), 1398px 1121px var(--star),
    671px 1301px var(--star), 1404px 1663px var(--star), 740px 1018px var(--star), 1600px 377px var(--star),
    785px 514px var(--star), 112px 1084px var(--star), 1915px 1887px var(--star), 1463px 1848px var(--star),
    687px 1115px var(--star), 1268px 1768px var(--star), 1729px 1425px var(--star),
    1284px 1022px var(--star), 801px 974px var(--star), 1975px 1317px var(--star), 1354px 834px var(--star),
    1446px 1484px var(--star), 1283px 1786px var(--star), 11px 523px var(--star), 1842px 236px var(--star),
    1355px 654px var(--star), 429px 7px var(--star), 1033px 1128px var(--star), 157px 297px var(--star),
    545px 635px var(--star), 52px 1080px var(--star), 827px 1520px var(--star), 1121px 490px var(--star),
    9px 309px var(--star), 1744px 1586px var(--star), 1014px 417px var(--star), 1534px 524px var(--star),
    958px 552px var(--star), 1403px 1496px var(--star), 387px 703px var(--star), 1522px 548px var(--star),
    1355px 282px var(--star), 1532px 601px var(--star), 1838px 790px var(--star), 290px 259px var(--star),
    295px 598px var(--star), 1601px 539px var(--star), 1561px 1272px var(--star), 34px 1922px var(--star),
    1024px 543px var(--star), 467px 369px var(--star), 722px 333px var(--star), 1976px 1255px var(--star),
    766px 983px var(--star), 1582px 1285px var(--star), 12px 512px var(--star), 617px 1410px var(--star),
    682px 577px var(--star), 1334px 1438px var(--star), 439px 327px var(--star), 1617px 1661px var(--star),
    673px 129px var(--star), 794px 941px var(--star), 1386px 1902px var(--star), 37px 1353px var(--star),
    1467px 1353px var(--star), 416px 18px var(--star), 187px 344px var(--star), 200px 1898px var(--star),
    1491px 1619px var(--star), 811px 347px var(--star), 924px 1827px var(--star), 945px 217px var(--star),
    1735px 1228px var(--star), 379px 1890px var(--star), 79px 761px var(--star), 825px 1837px var(--star),
    1980px 1558px var(--star), 1308px 1573px var(--star), 1488px 1726px var(--star),
    382px 1208px var(--star), 522px 595px var(--star), 1277px 1898px var(--star), 354px 552px var(--star),
    161px 1784px var(--star), 614px 251px var(--star), 526px 1576px var(--star), 17px 212px var(--star),
    179px 996px var(--star), 467px 1208px var(--star), 1944px 1838px var(--star), 1140px 1093px var(--star),
    858px 1007px var(--star), 200px 1064px var(--star), 423px 1964px var(--star), 1945px 439px var(--star),
    1377px 689px var(--star), 1120px 1437px var(--star), 1876px 668px var(--star), 907px 1324px var(--star),
    343px 1976px var(--star), 1816px 1501px var(--star), 1849px 177px var(--star), 647px 91px var(--star),
    1984px 1012px var(--star), 1336px 1300px var(--star), 128px 648px var(--star), 305px 1060px var(--star),
    1324px 826px var(--star), 1263px 1314px var(--star), 1801px 629px var(--star), 1614px 1555px var(--star),
    1634px 90px var(--star), 1603px 452px var(--star), 891px 1984px var(--star), 1556px 1906px var(--star),
    121px 68px var(--star), 1676px 1714px var(--star), 516px 936px var(--star), 1947px 1492px var(--star),
    1455px 1519px var(--star), 45px 602px var(--star), 205px 1039px var(--star), 793px 172px var(--star),
    1562px 1739px var(--star), 1056px 110px var(--star), 1512px 379px var(--star), 1795px 1621px var(--star),
    1848px 607px var(--star), 262px 1719px var(--star), 477px 991px var(--star), 483px 883px var(--star),
    1239px 1197px var(--star), 1496px 647px var(--star), 1649px 25px var(--star), 1491px 1946px var(--star),
    119px 996px var(--star), 179px 1472px var(--star), 1341px 808px var(--star), 1565px 1700px var(--star),
    407px 1544px var(--star), 1754px 357px var(--star), 1288px 981px var(--star), 902px 1997px var(--star),
    1755px 1668px var(--star), 186px 877px var(--star), 1202px 1882px var(--star), 461px 1213px var(--star),
    1400px 748px var(--star), 1969px 1899px var(--star), 809px 522px var(--star), 514px 1219px var(--star),
    374px 275px var(--star), 938px 1973px var(--star), 357px 552px var(--star), 144px 1722px var(--star),
    1572px 912px var(--star), 402px 1858px var(--star), 1544px 1195px var(--star), 667px 1257px var(--star),
    727px 1496px var(--star), 993px 232px var(--star), 1772px 313px var(--star), 1040px 1590px var(--star),
    1204px 1973px var(--star), 1268px 79px var(--star), 1555px 1048px var(--star), 986px 1707px var(--star),
    978px 1710px var(--star), 713px 360px var(--star), 407px 863px var(--star), 461px 736px var(--star),
    284px 1608px var(--star), 103px 430px var(--star), 1283px 1319px var(--star), 977px 1186px var(--star),
    1966px 1516px var(--star), 1287px 1129px var(--star), 70px 1098px var(--star), 1189px 889px var(--star),
    1126px 1734px var(--star), 309px 1292px var(--star), 879px 764px var(--star), 65px 473px var(--star),
    1003px 1959px var(--star), 658px 791px var(--star), 402px 1576px var(--star), 35px 622px var(--star),
    529px 1589px var(--star), 164px 666px var(--star), 1876px 1290px var(--star), 1541px 526px var(--star),
    270px 1297px var(--star), 440px 865px var(--star), 1500px 802px var(--star), 182px 1754px var(--star),
    1264px 892px var(--star), 272px 1249px var(--star), 1289px 1535px var(--star), 190px 1646px var(--star),
    955px 242px var(--star), 1456px 1597px var(--star), 1727px 1983px var(--star), 635px 801px var(--star),
    226px 455px var(--star), 1396px 1710px var(--star), 849px 1863px var(--star), 237px 1264px var(--star),
    839px 140px var(--star), 1122px 735px var(--star), 1280px 15px var(--star), 1318px 242px var(--star),
    1819px 1148px var(--star), 333px 1392px var(--star), 1949px 553px var(--star), 1878px 1332px var(--star),
    467px 548px var(--star), 1812px 1082px var(--star), 1067px 193px var(--star), 243px 156px var(--star),
    483px 1616px var(--star), 1714px 933px var(--star), 759px 1800px var(--star), 1822px 995px var(--star),
    1877px 572px var(--star), 581px 1084px var(--star), 107px 732px var(--star), 642px 1837px var(--star),
    166px 1493px var(--star), 1555px 198px var(--star), 819px 307px var(--star), 947px 345px var(--star),
    827px 224px var(--star), 927px 1394px var(--star), 540px 467px var(--star), 1093px 405px var(--star),
    1140px 927px var(--star), 130px 529px var(--star), 33px 1980px var(--star), 1147px 1663px var(--star),
    1616px 1436px var(--star), 528px 710px var(--star), 798px 1100px var(--star), 505px 1480px var(--star),
    899px 641px var(--star), 1909px 1949px var(--star), 1311px 964px var(--star), 979px 1301px var(--star),
    1393px 969px var(--star), 1793px 1886px var(--star), 292px 357px var(--star), 1196px 1718px var(--star),
    1290px 1994px var(--star), 537px 1973px var(--star), 1181px 1674px var(--star),
    1740px 1566px var(--star), 1307px 265px var(--star), 922px 522px var(--star), 1892px 472px var(--star),
    384px 1746px var(--star), 392px 1098px var(--star), 647px 548px var(--star), 390px 1498px var(--star),
    1246px 138px var(--star), 730px 876px var(--star), 192px 1472px var(--star), 1790px 1789px var(--star),
    928px 311px var(--star), 1253px 1647px var(--star), 747px 1921px var(--star), 1561px 1025px var(--star),
    1533px 1292px var(--star), 1985px 195px var(--star), 728px 729px var(--star), 1712px 1936px var(--star),
    512px 1717px var(--star), 1528px 483px var(--star), 313px 1642px var(--star), 281px 1849px var(--star),
    1212px 799px var(--star), 435px 1191px var(--star), 1422px 611px var(--star), 1718px 1964px var(--star),
    411px 944px var(--star), 210px 636px var(--star), 1502px 1295px var(--star), 1434px 349px var(--star),
    769px 60px var(--star), 747px 1053px var(--star), 789px 504px var(--star), 1436px 1264px var(--star),
    1893px 1225px var(--star), 1394px 1788px var(--star), 1108px 1317px var(--star),
    1673px 1395px var(--star), 854px 1010px var(--star), 1705px 80px var(--star), 1858px 148px var(--star),
    1729px 344px var(--star), 1388px 664px var(--star), 895px 406px var(--star), 1479px 157px var(--star),
    1441px 1157px var(--star), 552px 1900px var(--star), 516px 364px var(--star), 1647px 189px var(--star),
    1427px 1071px var(--star), 785px 729px var(--star), 1080px 1710px var(--star), 504px 204px var(--star),
    1177px 1622px var(--star), 657px 34px var(--star), 1296px 1099px var(--star), 248px 180px var(--star),
    1212px 1568px var(--star), 667px 1562px var(--star), 695px 841px var(--star), 1608px 1247px var(--star),
    751px 882px var(--star), 87px 167px var(--star), 607px 1368px var(--star), 1363px 1203px var(--star),
    1836px 317px var(--star), 1668px 1703px var(--star), 830px 1154px var(--star), 1721px 1398px var(--star),
    1601px 1280px var(--star), 976px 874px var(--star), 1743px 254px var(--star), 1020px 1815px var(--star),
    1670px 1766px var(--star), 1890px 735px var(--star), 1379px 136px var(--star), 1864px 695px var(--star),
    206px 965px var(--star), 1404px 1932px var(--star), 1923px 1360px var(--star), 247px 682px var(--star),
    519px 1708px var(--star), 645px 750px var(--star), 1164px 1204px var(--star), 834px 323px var(--star),
    172px 1350px var(--star), 213px 972px var(--star), 1837px 190px var(--star), 285px 1806px var(--star),
    1047px 1299px var(--star), 1548px 825px var(--star), 1730px 324px var(--star), 1346px 1909px var(--star),
    772px 270px var(--star), 345px 1190px var(--star), 478px 1433px var(--star), 1479px 25px var(--star),
    1994px 1830px var(--star), 1744px 732px var(--star), 20px 1635px var(--star), 690px 1795px var(--star),
    1594px 569px var(--star), 579px 245px var(--star), 1398px 733px var(--star), 408px 1352px var(--star),
    1774px 120px var(--star), 1152px 1370px var(--star), 1698px 1810px var(--star), 710px 1450px var(--star),
    665px 286px var(--star), 493px 1720px var(--star), 786px 5px var(--star), 637px 1140px var(--star),
    764px 324px var(--star), 927px 310px var(--star), 938px 1424px var(--star), 1884px 744px var(--star),
    913px 462px var(--star), 1831px 1936px var(--star), 1527px 249px var(--star), 36px 1381px var(--star),
    1597px 581px var(--star), 1530px 355px var(--star), 949px 459px var(--star), 799px 828px var(--star),
    242px 1471px var(--star), 654px 797px var(--star), 796px 594px var(--star), 1365px 678px var(--star),
    752px 23px var(--star), 1630px 541px var(--star), 982px 72px var(--star), 1733px 1831px var(--star),
    21px 412px var(--star), 775px 998px var(--star), 335px 1945px var(--star), 264px 583px var(--star),
    158px 1311px var(--star), 528px 164px var(--star), 1978px 574px var(--star), 717px 1203px var(--star),
    734px 1591px var(--star), 1555px 820px var(--star), 16px 1943px var(--star), 1625px 1177px var(--star),
    1236px 690px var(--star), 1585px 1590px var(--star), 1737px 1728px var(--star), 721px 698px var(--star),
    1804px 1186px var(--star), 166px 980px var(--star), 1850px 230px var(--star), 330px 1712px var(--star),
    95px 797px var(--star), 1948px 1078px var(--star), 469px 939px var(--star), 1269px 1899px var(--star),
    955px 1220px var(--star), 1137px 1075px var(--star), 312px 1293px var(--star), 986px 1762px var(--star),
    1103px 1238px var(--star), 428px 1993px var(--star), 355px 570px var(--star), 977px 1836px var(--star),
    1395px 1092px var(--star), 276px 913px var(--star), 1743px 656px var(--star), 773px 502px var(--star),
    1686px 1322px var(--star), 1516px 1945px var(--star), 1334px 501px var(--star), 266px 156px var(--star),
    455px 655px var(--star), 798px 72px var(--star), 1059px 1259px var(--star), 1402px 1687px var(--star),
    236px 1329px var(--star), 1455px 786px var(--star), 146px 1228px var(--star), 1851px 823px var(--star),
    1062px 100px var(--star), 1220px 953px var(--star), 20px 1826px var(--star), 36px 1063px var(--star),
    1525px 338px var(--star), 790px 1521px var(--star), 741px 1099px var(--star), 288px 1489px var(--star),
    700px 1060px var(--star), 390px 1071px var(--star), 411px 1036px var(--star), 1853px 1072px var(--star),
    1446px 1085px var(--star), 1164px 874px var(--star), 924px 925px var(--star), 291px 271px var(--star),
    1257px 1964px var(--star), 1580px 1352px var(--star), 1507px 1216px var(--star), 211px 956px var(--star),
    985px 1195px var(--star), 975px 1640px var(--star), 518px 101px var(--star), 663px 1395px var(--star),
    914px 532px var(--star), 145px 1320px var(--star), 69px 1397px var(--star), 982px 523px var(--star),
    257px 725px var(--star), 1599px 831px var(--star), 1636px 1513px var(--star), 1250px 1158px var(--star),
    1132px 604px var(--star), 183px 102px var(--star), 1057px 318px var(--star), 1247px 1835px var(--star),
    1983px 1110px var(--star), 1077px 1455px var(--star), 921px 1770px var(--star), 806px 1350px var(--star),
    1938px 1992px var(--star), 855px 1260px var(--star), 902px 1345px var(--star), 658px 1908px var(--star),
    1845px 679px var(--star), 712px 1482px var(--star), 595px 950px var(--star), 1784px 1992px var(--star),
    1847px 1785px var(--star), 691px 1004px var(--star), 175px 1179px var(--star), 1666px 1911px var(--star),
    41px 61px var(--star), 971px 1080px var(--star), 1830px 1450px var(--star), 1351px 1518px var(--star),
    1257px 99px var(--star), 1395px 1498px var(--star), 1117px 252px var(--star), 1779px 597px var(--star),
    1346px 729px var(--star), 1108px 1144px var(--star), 402px 691px var(--star), 72px 496px var(--star),
    1673px 1604px var(--star), 1497px 974px var(--star), 1865px 1664px var(--star), 88px 806px var(--star),
    918px 77px var(--star), 244px 1118px var(--star), 256px 1820px var(--star), 1851px 1840px var(--star),
    605px 1851px var(--star), 634px 383px var(--star), 865px 37px var(--star), 943px 1024px var(--star),
    1951px 177px var(--star), 1097px 523px var(--star), 985px 1700px var(--star), 1243px 122px var(--star),
    768px 1070px var(--star), 468px 194px var(--star), 320px 1867px var(--star), 1850px 185px var(--star),
    380px 1616px var(--star), 468px 1294px var(--star), 1122px 1743px var(--star), 884px 299px var(--star),
    1300px 1917px var(--star), 1860px 396px var(--star), 1270px 990px var(--star), 529px 733px var(--star),
    1975px 1347px var(--star), 1885px 685px var(--star), 226px 506px var(--star), 651px 878px var(--star),
    1323px 680px var(--star), 1284px 680px var(--star), 238px 1967px var(--star), 911px 174px var(--star),
    1111px 521px var(--star), 1150px 85px var(--star), 794px 502px var(--star), 484px 1856px var(--star),
    1809px 368px var(--star), 112px 953px var(--star), 590px 1009px var(--star), 1655px 311px var(--star),
    100px 1026px var(--star), 1803px 352px var(--star), 865px 306px var(--star), 1077px 1019px var(--star),
    1335px 872px var(--star), 1647px 1298px var(--star), 1233px 1387px var(--star), 698px 1036px var(--star),
    659px 1860px var(--star), 388px 1412px var(--star), 1212px 458px var(--star), 755px 1468px var(--star),
    696px 1654px var(--star), 1144px 60px var(--star);
  }

  .stars2 {
    width: 2px;
    height: 2px;
    animation: starsAnimation 100s linear infinite;
    box-shadow: 1448px 320px var(--star), 1775px 1663px var(--star), 332px 1364px var(--star),
    878px 340px var(--star), 569px 1832px var(--star), 1422px 1684px var(--star), 1946px 1907px var(--star),
    121px 979px var(--star), 1044px 1069px var(--star), 463px 381px var(--star), 423px 112px var(--star),
    523px 1179px var(--star), 779px 654px var(--star), 1398px 694px var(--star), 1085px 1464px var(--star),
    1599px 1869px var(--star), 801px 1882px var(--star), 779px 1231px var(--star), 552px 932px var(--star),
    1057px 1196px var(--star), 282px 1280px var(--star), 496px 1986px var(--star), 1833px 1120px var(--star),
    1802px 1293px var(--star), 6px 1696px var(--star), 412px 1902px var(--star), 605px 438px var(--star),
    24px 1212px var(--star), 234px 1320px var(--star), 544px 344px var(--star), 1107px 170px var(--star),
    1603px 196px var(--star), 905px 648px var(--star), 68px 1458px var(--star), 649px 1969px var(--star),
    744px 675px var(--star), 1127px 478px var(--star), 714px 1814px var(--star), 1486px 526px var(--star),
    270px 1636px var(--star), 1931px 149px var(--star), 1807px 378px var(--star), 8px 390px var(--star),
    1415px 699px var(--star), 1473px 1211px var(--star), 1590px 141px var(--star), 270px 1705px var(--star),
    69px 1423px var(--star), 1108px 1053px var(--star), 1946px 128px var(--star), 371px 371px var(--star),
    1490px 220px var(--star), 357px 1885px var(--star), 363px 363px var(--star), 1896px 1256px var(--star),
    1979px 1050px var(--star), 947px 1342px var(--star), 1754px 242px var(--star), 514px 974px var(--star),
    65px 1477px var(--star), 1840px 547px var(--star), 950px 695px var(--star), 459px 1150px var(--star),
    1124px 1502px var(--star), 481px 940px var(--star), 680px 839px var(--star), 797px 1169px var(--star),
    1977px 1491px var(--star), 734px 1724px var(--star), 210px 298px var(--star), 816px 628px var(--star),
    686px 770px var(--star), 1721px 267px var(--star), 1663px 511px var(--star), 1481px 1141px var(--star),
    582px 248px var(--star), 1308px 953px var(--star), 628px 657px var(--star), 897px 1535px var(--star),
    270px 931px var(--star), 791px 467px var(--star), 1336px 1732px var(--star), 1013px 1653px var(--star),
    1911px 956px var(--star), 587px 816px var(--star), 83px 456px var(--star), 930px 1478px var(--star),
    1587px 1694px var(--star), 614px 1200px var(--star), 302px 1782px var(--star), 1711px 1432px var(--star),
    443px 904px var(--star), 1666px 714px var(--star), 1588px 1167px var(--star), 273px 1075px var(--star),
    1679px 461px var(--star), 721px 664px var(--star), 1202px 10px var(--star), 166px 1126px var(--star),
    331px 1628px var(--star), 430px 1565px var(--star), 1585px 509px var(--star), 640px 38px var(--star),
    822px 837px var(--star), 1760px 1664px var(--star), 1122px 1458px var(--star), 398px 131px var(--star),
    689px 285px var(--star), 460px 652px var(--star), 1627px 365px var(--star), 348px 1648px var(--star),
    819px 1946px var(--star), 981px 1917px var(--star), 323px 76px var(--star), 979px 684px var(--star),
    887px 536px var(--star), 1348px 1596px var(--star), 1055px 666px var(--star), 1402px 1797px var(--star),
    1300px 1055px var(--star), 937px 238px var(--star), 1474px 1815px var(--star), 1144px 1710px var(--star),
    1629px 1087px var(--star), 911px 919px var(--star), 771px 819px var(--star), 403px 720px var(--star),
    163px 736px var(--star), 1062px 238px var(--star), 1774px 818px var(--star), 1874px 1178px var(--star),
    1177px 699px var(--star), 1244px 1244px var(--star), 1371px 58px var(--star), 564px 1515px var(--star),
    1824px 487px var(--star), 929px 702px var(--star), 394px 1348px var(--star), 1161px 641px var(--star),
    219px 1841px var(--star), 358px 941px var(--star), 140px 1759px var(--star), 1019px 1345px var(--star),
    274px 436px var(--star), 1433px 1605px var(--star), 1798px 1426px var(--star), 294px 1848px var(--star),
    1681px 1877px var(--star), 1344px 1824px var(--star), 1439px 1632px var(--star),
    161px 1012px var(--star), 1308px 588px var(--star), 1789px 582px var(--star), 721px 1910px var(--star),
    318px 218px var(--star), 607px 319px var(--star), 495px 535px var(--star), 1552px 1575px var(--star),
    1562px 67px var(--star), 403px 926px var(--star), 1096px 1800px var(--star), 1814px 1709px var(--star),
    1882px 1831px var(--star), 533px 46px var(--star), 823px 969px var(--star), 530px 165px var(--star),
    1030px 352px var(--star), 1681px 313px var(--star), 338px 115px var(--star), 1607px 211px var(--star),
    1718px 1184px var(--star), 1589px 659px var(--star), 278px 355px var(--star), 464px 1464px var(--star),
    1165px 277px var(--star), 950px 694px var(--star), 1746px 293px var(--star), 793px 911px var(--star),
    528px 773px var(--star), 1883px 1694px var(--star), 748px 182px var(--star), 1924px 1531px var(--star),
    100px 636px var(--star), 1473px 1445px var(--star), 1264px 1244px var(--star), 850px 1377px var(--star),
    987px 1976px var(--star), 933px 1761px var(--star), 922px 1270px var(--star), 500px 396px var(--star),
    1324px 8px var(--star), 1967px 1814px var(--star), 1072px 1401px var(--star), 961px 37px var(--star),
    156px 81px var(--star), 1915px 502px var(--star), 1076px 1846px var(--star), 152px 1669px var(--star),
    986px 1529px var(--star), 1667px 1137px var(--star);
  }

  .stars3 {
    width: 3px;
    height: 3px;
    animation: starsAnimation 120s linear infinite;
    box-shadow: 387px 1878px var(--star), 760px 1564px var(--star), 1487px 999px var(--star),
    948px 1828px var(--star), 1977px 1001px var(--star), 1284px 1963px var(--star), 656px 284px var(--star),
    1268px 1635px var(--star), 1820px 598px var(--star), 642px 1900px var(--star), 296px 57px var(--star),
    921px 1620px var(--star), 476px 1858px var(--star), 658px 613px var(--star), 1171px 1363px var(--star),
    1419px 283px var(--star), 1037px 731px var(--star), 503px 663px var(--star), 1562px 463px var(--star),
    383px 1197px var(--star), 1171px 1233px var(--star), 876px 1768px var(--star), 856px 1615px var(--star),
    1375px 1924px var(--star), 1725px 918px var(--star), 952px 119px var(--star), 768px 1212px var(--star),
    992px 1462px var(--star), 1929px 717px var(--star), 1947px 755px var(--star), 1818px 1123px var(--star),
    1896px 1672px var(--star), 460px 198px var(--star), 256px 271px var(--star), 752px 544px var(--star),
    1222px 1859px var(--star), 1851px 443px var(--star), 313px 1858px var(--star), 709px 446px var(--star),
    1546px 697px var(--star), 674px 1155px var(--star), 1112px 130px var(--star), 355px 1790px var(--star),
    1496px 974px var(--star), 1696px 480px var(--star), 1316px 1265px var(--star), 1645px 1063px var(--star),
    1182px 237px var(--star), 427px 1582px var(--star), 859px 253px var(--star), 458px 939px var(--star),
    1517px 1644px var(--star), 1943px 60px var(--star), 212px 1650px var(--star), 966px 1786px var(--star),
    473px 712px var(--star), 130px 76px var(--star), 1417px 1186px var(--star), 909px 1580px var(--star),
    1913px 762px var(--star), 204px 1143px var(--star), 1998px 1057px var(--star), 1468px 1301px var(--star),
    144px 1676px var(--star), 21px 1601px var(--star), 382px 1362px var(--star), 912px 753px var(--star),
    1488px 1405px var(--star), 802px 156px var(--star), 174px 550px var(--star), 338px 1366px var(--star),
    1197px 774px var(--star), 602px 486px var(--star), 682px 1877px var(--star), 348px 1503px var(--star),
    407px 1139px var(--star), 950px 1400px var(--star), 922px 1139px var(--star), 1697px 293px var(--star),
    1238px 1281px var(--star), 1038px 1197px var(--star), 376px 1889px var(--star),
    1255px 1680px var(--star), 1008px 1316px var(--star), 1538px 1447px var(--star),
    1186px 874px var(--star), 1967px 640px var(--star), 1341px 19px var(--star), 29px 1732px var(--star),
    16px 1650px var(--star), 1021px 1075px var(--star), 723px 424px var(--star), 1175px 41px var(--star),
    494px 1957px var(--star), 1296px 431px var(--star), 175px 1507px var(--star), 831px 121px var(--star),
    498px 1947px var(--star), 617px 880px var(--star), 240px 403px var(--star);
  }

  @keyframes starsAnimation {
    0% {
      translate: 0 0px;
      opacity: 0;
    }

    10% {
      opacity: 1;
    }

    100% {
      translate: 0 -2000px;
    }
  }
`;

export default GlobalStyle;
