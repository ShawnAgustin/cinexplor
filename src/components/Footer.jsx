import './css/Footer.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const base_imgURL = 'http://image.tmdb.org/t/p/w154/'
  const popMoviesURL =
    'https://api.themoviedb.org/3/movie/popular?api_key=6599bc26f4ca86fd26961ad8384590da&language=en-US&page=1'
  const popShowsURL =
    'https://api.themoviedb.org/3/tv/popular?api_key=6599bc26f4ca86fd26961ad8384590da&language=en-US&page=1'

  const [top, setTop] = useState([])

  useEffect(() => {
    async function fetchData() {
      // const movies = [{"adult":false,"backdrop_path":"/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg","genre_ids":[28,12,14],"id":616037,"original_language":"en","original_title":"Thor: Love and Thunder","overview":"After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.","popularity":5099.881,"poster_path":"/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg","release_date":"2022-07-06","title":"Thor: Love and Thunder","video":false,"vote_average":6.8,"vote_count":2666},{"adult":false,"backdrop_path":"/hYZ4a0JvPETdfgJJ9ZzyFufq8KQ.jpg","genre_ids":[28,18,878],"id":629176,"original_language":"en","original_title":"Samaritan","overview":"Thirteen year old Sam Cleary  suspects that his mysteriously reclusive neighbor Mr. Smith is actually the legendary vigilante Samaritan, who was reported dead 20 years ago. With crime on the rise and the city on the brink of chaos, Sam makes it his mission to coax his neighbor out of hiding to save the city from ruin.","popularity":4388.014,"poster_path":"/vwq5iboxYoaSpOmEQrhq9tHicq7.jpg","release_date":"2022-08-25","title":"Samaritan","video":false,"vote_average":7,"vote_count":860},{"adult":false,"backdrop_path":"/rqgeBNWXas1yrAyXxwi9CahfScx.jpg","genre_ids":[53],"id":985939,"original_language":"en","original_title":"Fall","overview":"For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights.","popularity":4808.091,"poster_path":"/9f5sIJEgvUpFv0ozfA6TurG4j22.jpg","release_date":"2022-08-11","title":"Fall","video":false,"vote_average":7.4,"vote_count":293},{"adult":false,"backdrop_path":"/yaze6df9AMIA9oeDEbIZ4zOTRCJ.jpg","genre_ids":[28,12,14],"id":960700,"original_language":"ja","original_title":"鋼の錬金術師 完結編 復讐者スカー","overview":"The Elric brothers meet their toughest opponent yet — a lone serial killer with a large scar on his forehead.","popularity":2718.152,"poster_path":"/c5OwwBNyJkwyroIOIJL9IiRjydR.jpg","release_date":"2022-05-20","title":"Fullmetal Alchemist the Revenge of Scar","video":false,"vote_average":7,"vote_count":68},{"adult":false,"backdrop_path":"/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg","genre_ids":[53,28],"id":766507,"original_language":"en","original_title":"Prey","overview":"When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.","popularity":2444.372,"poster_path":"/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg","release_date":"2022-08-02","title":"Prey","video":false,"vote_average":8,"vote_count":3686},{"adult":false,"backdrop_path":"/xfNHRI2f5kHGvogxLd0C5sB90L7.jpg","genre_ids":[16,28,10751,878,35],"id":539681,"original_language":"en","original_title":"DC League of Super-Pets","overview":"When Superman and the rest of the Justice League are kidnapped, Krypto the Super-Dog must convince a rag-tag shelter pack - Ace the hound, PB the potbellied pig, Merton the turtle and Chip the squirrel - to master their own newfound powers and help him rescue the superheroes.","popularity":2479.833,"poster_path":"/r7XifzvtezNt31ypvsmb6Oqxw49.jpg","release_date":"2022-07-27","title":"DC League of Super-Pets","video":false,"vote_average":7.6,"vote_count":457},{"adult":false,"backdrop_path":"/rHzoz94bRfyfNLjiIB26Wt5KDHE.jpg","genre_ids":[28,80,35,12],"id":773867,"original_language":"ko","original_title":"서울대작전","overview":"Chasing speed, dreams and money, a team of drivers get involved in the slush fund investigation of a powerful figure during the 1988 Seoul Olympics.","popularity":2060.218,"poster_path":"/ffX0TL3uKerLXACkuZGWhAPMbAq.jpg","release_date":"2022-08-26","title":"Seoul Vibe","video":false,"vote_average":6.9,"vote_count":59},{"adult":false,"backdrop_path":"/3PieOs1t6dPHWlgvX3XoqTIQLqN.jpg","genre_ids":[12,28,878],"id":507086,"original_language":"en","original_title":"Jurassic World Dominion","overview":"Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.","popularity":1834.657,"poster_path":"/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg","release_date":"2022-06-01","title":"Jurassic World Dominion","video":false,"vote_average":7.1,"vote_count":3242},{"adult":false,"backdrop_path":"/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg","genre_ids":[28,18],"id":361743,"original_language":"en","original_title":"Top Gun: Maverick","overview":"After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.","popularity":1804.371,"poster_path":"/62HCnUTziyWcpDaBO2i1DX17ljH.jpg","release_date":"2022-05-24","title":"Top Gun: Maverick","video":false,"vote_average":8.4,"vote_count":3548},{"adult":false,"backdrop_path":"/xVbppM1xgbskOKgOuV8fbWBWHtt.jpg","genre_ids":[27,9648,878,53],"id":762504,"original_language":"en","original_title":"Nope","overview":"Residents in a lonely gulch of inland California bear witness to an uncanny, chilling discovery.","popularity":1590.384,"poster_path":"/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg","release_date":"2022-07-20","title":"Nope","video":false,"vote_average":7.1,"vote_count":1294},{"adult":false,"backdrop_path":"/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg","genre_ids":[16,12,35,14],"id":438148,"original_language":"en","original_title":"Minions: The Rise of Gru","overview":"A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.","popularity":1766.772,"poster_path":"/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg","release_date":"2022-06-29","title":"Minions: The Rise of Gru","video":false,"vote_average":7.7,"vote_count":1864},{"adult":false,"backdrop_path":"/pkLegAR3G5T63B2Xz2ijbD1BAm8.jpg","genre_ids":[53,27,28],"id":927341,"original_language":"en","original_title":"Hunting Ava Bravo","overview":"Billionaire sportsman Buddy King unwinds by hunting human captives on his remote mountain estate. But his latest victim, Ava Bravo, is no easy target.","popularity":1650.174,"poster_path":"/etc6HKBEhNySNnYU2nRgbSeIyoW.jpg","release_date":"2022-04-01","title":"Hunting Ava Bravo","video":false,"vote_average":6.4,"vote_count":44},{"adult":false,"backdrop_path":"/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg","genre_ids":[16,878,28],"id":610150,"original_language":"ja","original_title":"ドラゴンボール超 スーパーヒーロー","overview":"The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.","popularity":5609.525,"poster_path":"/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg","release_date":"2022-06-11","title":"Dragon Ball Super: Super Hero","video":false,"vote_average":8,"vote_count":1398},{"adult":false,"backdrop_path":"/i0Y0wP8H6SRgjr6QmuwbtQbS24D.jpg","genre_ids":[28,18],"id":579974,"original_language":"te","original_title":"రౌద్రం రణం రుధిరం","overview":"A fictional history of two legendary revolutionaries' journey away from home before they began fighting for their country in the 1920s.","popularity":1619.751,"poster_path":"/nEufeZlyAOLqO2brrs0yeF1lgXO.jpg","release_date":"2022-03-24","title":"RRR","video":false,"vote_average":7.8,"vote_count":309},{"adult":false,"backdrop_path":"/eiBMu2noc6r1QZLfQlFhfVtbXeM.jpg","genre_ids":[28,53,9648],"id":997120,"original_language":"en","original_title":"Sniper: Rogue Mission","overview":"When a crooked federal agent is involved in a human sex trafficking ring, Sniper and CIA Rookie Brandon Beckett goes rogue, teaming up with his former allies Homeland Security Agent Zero and assassin Lady Death to uncover the corrupt agent and take down the criminal organization.","popularity":1367.095,"poster_path":"/jSL5TqroJsDAIgBdELBwby1uhf1.jpg","release_date":"2022-08-15","title":"Sniper: Rogue Mission","video":false,"vote_average":6.8,"vote_count":54},{"adult":false,"backdrop_path":"/zlLQXKsSa2CEkz3UBFWPUPX90PN.jpg","genre_ids":[53],"id":968857,"original_language":"en","original_title":"Looks Can Kill","overview":"A group of models is killed off, one by one, and everyone is a suspect.","popularity":1285.263,"poster_path":"/1uy2PNFwtkqH3mhGd6irk5aeIrF.jpg","release_date":"2022-02-01","title":"Looks Can Kill","video":false,"vote_average":6.1,"vote_count":6},{"adult":false,"backdrop_path":"/rwgmDkIEv8VjAsWx25ottJrFvpO.jpg","genre_ids":[10749,18],"id":744276,"original_language":"en","original_title":"After Ever Happy","overview":"As a shocking truth about a couple's families emerges, the two lovers discover they are not so different from each other. Tessa is no longer the sweet, simple, good girl she was when she met Hardin — any more than he is the cruel, moody boy she fell so hard for.","popularity":1359.901,"poster_path":"/moogpu8rNkEjTgFyLXwhPghft5w.jpg","release_date":"2022-08-24","title":"After Ever Happy","video":false,"vote_average":6.5,"vote_count":46},{"adult":false,
      //     "backdrop_path":"/mCAkUizRRIwKMOlne9CIoJ3utSc.jpg","genre_ids":[53,10770,28],"id":951368,"original_language":"en","original_title":"Your Boyfriend Is Mine","overview":"Over the objection of his girlfriend, Ben agrees to take a job as the “live in” man servant to a wealthy businesswoman, Amanda, but quickly realizes he has made a deal with the devil, and has put himself and his girlfriend in mortal jeopardy","popularity":1354.929,"poster_path":"/2OOYNZLKjdX8Z5KNyz7zZnHmodJ.jpg","release_date":"2022-03-19","title":"Your Boyfriend Is Mine","video":false,"vote_average":6.4,"vote_count":17},{"adult":false,"backdrop_path":"/5L6RPHHUFlsliTqKRmUxFnIkXpR.jpg","genre_ids":[28,14,27,35],"id":755566,"original_language":"en","original_title":"Day Shift","overview":"An LA vampire hunter has a week to come up with the cash to pay for his kid's tuition and braces. Trying to make a living these days just might kill him.","popularity":1239.776,"poster_path":"/bI7lGR5HuYlENlp11brKUAaPHuO.jpg","release_date":"2022-08-10","title":"Day Shift","video":false,"vote_average":6.9,"vote_count":912},{"adult":false,"backdrop_path":"/AfvIjhDu9p64jKcmohS4hsPG95Q.jpg","genre_ids":[27,53],"id":756999,"original_language":"en","original_title":"The Black Phone","overview":"Finney Blake, a shy but clever 13-year-old boy, is abducted by a sadistic killer and trapped in a soundproof basement where screaming is of little use. When a disconnected phone on the wall begins to ring, Finney discovers that he can hear the voices of the killer’s previous victims. And they are dead set on making sure that what happened to them doesn’t happen to Finney.","popularity":1291.64,"poster_path":"/lr11mCT85T1JanlgjMuhs9nMht4.jpg","release_date":"2022-06-22","title":"The Black Phone","video":false,"vote_average":7.9,"vote_count":2391}];
      // const shows =[{"backdrop_path":"/9GvhICFMiRQA82vS6ydkXxeEkrd.jpg","first_air_date":"2022-08-18","genre_ids":[35,10765],"id":92783,"name":"She-Hulk: Attorney at Law","origin_country":["US"],"original_language":"en","original_name":"She-Hulk: Attorney at Law","overview":"Jennifer Walters navigates the complicated life of a single, 30-something attorney who also happens to be a green 6-foot-7-inch superpowered hulk.","popularity":6423.308,"poster_path":"/hJfI6AGrmr4uSHRccfJuSsapvOb.jpg","vote_average":7.3,"vote_count":631},{"backdrop_path":"/pdfCr8W0wBCpdjbZXSxnKhZtosP.jpg","first_air_date":"2022-09-01","genre_ids":[10765,10759,18],"id":84773,"name":"The Lord of the Rings: The Rings of Power","origin_country":["US"],"original_language":"en","original_name":"The Lord of the Rings: The Rings of Power","overview":"Beginning in a time of relative peace, we follow an ensemble cast of characters as they confront the re-emergence of evil to Middle-earth. From the darkest depths of the Misty Mountains, to the majestic forests of Lindon, to the breathtaking island kingdom of Númenor, to the furthest reaches of the map, these kingdoms and characters will carve out legacies that live on long after they are gone.","popularity":6527.43,"poster_path":"/suyNxglk17Cpk8rCM2kZgqKdftk.jpg","vote_average":7.5,"vote_count":429},{"backdrop_path":"/Aa9TLpNpBMyRkD8sPJ7ACKLjt0l.jpg","first_air_date":"2022-08-21","genre_ids":[18,10759,9648],"id":94997,"name":"House of the Dragon","origin_country":["US"],"original_language":"en","original_name":"House of the Dragon","overview":"The prequel series finds the Targaryen dynasty at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires—real and imagined—crumble from such heights. In the case of the Targaryens, their slow fall begins almost 193 years before the events of Game of Thrones, when King Viserys Targaryen breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.","popularity":5115.339,"poster_path":"/z2yahl2uefxDCl0nogcRBstwruJ.jpg","vote_average":8.7,"vote_count":975},{"backdrop_path":"/jW61BMd1ZVWPXI7Ts4iC2BTx8Qj.jpg","first_air_date":"2022-04-11",
      //     "genre_ids":[18],"id":196572,"name":"The Secret House","origin_country":["KR"],"original_language":"ko","original_name":"비밀의 집","overview":"A story about quitting being a good boy and chasing evil to the end for the sake of the mother and sister who sacrificed for themselves.\n\nA revenge play in which a dirt spoon lawyer chasing the traces of his missing mother walks into the secret surrounding him to fight the world.","popularity":902.869,"poster_path":"/wNN9hJDV45BF2PiJQQVwBCiqLIl.jpg","vote_average":5.1,"vote_count":12},{"backdrop_path":"/uGy4DCmM33I7l86W7iCskNkvmLD.jpg","first_air_date":"2013-12-02","genre_ids":[16,35,10765,10759],"id":60625,"name":"Rick and Morty","origin_country":["US"],"original_language":"en","original_name":"Rick and Morty","overview":"Rick is a mentally-unbalanced but scientifically gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.","popularity":1408.972,"poster_path":"/cvhNj9eoRBe5SxjCbQTkh05UP5K.jpg","vote_average":8.7,"vote_count":6860},{"backdrop_path":"/o8zk3QmHYMSC7UiJgFk81OFF1sc.jpg","first_air_date":"2022-08-22","genre_ids":[10766,18],"id":204095,"name":"Mar do Sertão","origin_country":["BR"],"original_language":"pt","original_name":"Mar do Sertão","overview":"","popularity":1405.562,"poster_path":"/ixgnqO8xhFMb1zr8RRFsyeZ9CdD.jpg","vote_average":6.5,"vote_count":4},{"backdrop_path":"/rIe3PnM6S7IBUmvNwDkBMX0i9EZ.jpg","first_air_date":"2011-04-17","genre_ids":[10765,18,10759],"id":1399,"name":"Game of Thrones","origin_country":["US"],"original_language":"en","original_name":"Game of Thrones","overview":"Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.","popularity":1275.469,"poster_path":"/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg","vote_average":8.4,"vote_count":18978},{"backdrop_path":"/eqhKMZTLcieAvoH6CBqknTTfNby.jpg","first_air_date":"2022-08-05","genre_ids":[10765,18],"id":90802,"name":"The Sandman","origin_country":["US"],"original_language":"en","original_name":"The Sandman","overview":"After years of imprisonment, Morpheus — the King of Dreams — embarks on a journey across worlds to find what was stolen from him and restore his power.","popularity":1199.423,"poster_path":"/q54qEgagGOYCq5D1903eBVMNkbo.jpg","vote_average":8.2,"vote_count":783},{"backdrop_path":"/kOkmTrD8kWLeTXcAEwctg6GwW7t.jpg","first_air_date":"2017-02-20","genre_ids":[10751,35],"id":91759,"name":"Come Home Love: Lo and Behold","origin_country":["HK"],"original_language":"cn","original_name":"愛．回家之開心速遞","overview":"Hung Sue Gan starting from the bottom, established his own logistics company, which is now running smoothly. His only concern now are his three daughters. His eldest daughter has immigrated overseas. His second daughter Hung Yeuk Shui has reached the marriageable age, but has no hopes for marriage anytime soon. She is constantly bickering with her younger sister Hung Sum Yue, who is an honour student, over trivial matters, causing their father to not know whether to laugh or cry. Hung Sue Yan, Hung Sue Gan's brother, moves in with the family, temporarily ending his life as a nomadic photographer. He joins Hung Yeuk Shui's company and encounters Ko Pak Fei, the director of an online shop. The two appear to be former lovers, making for lots of laughter. Since Hung Sue Yan moved in, a series of strange events have occurred in the family. Upon investigation, the source is traced to Lung Ging Fung, a promising young man who is the son of department store mogul Lung Gam Wai.","popularity":1201.646,"poster_path":"/lgD4j9gUGmMckZpWWRJjorWqGVT.jpg","vote_average":4.7,"vote_count":9},{"backdrop_path":"/g63KmFgqkvXu6WKS23V56hqEidh.jpg","first_air_date":"2018-05-02","genre_ids":[10759,18,35],"id":77169,"name":"Cobra Kai","origin_country":["US"],"original_language":"en","original_name":"Cobra Kai","overview":"This Karate Kid sequel series picks up 30 years after the events of the 1984 All Valley Karate Tournament and finds Johnny Lawrence on the hunt for redemption by reopening the infamous Cobra Kai karate dojo. This reignites his old rivalry with the successful Daniel LaRusso, who has been working to maintain the balance in his life without mentor Mr. Miyagi.","popularity":1371.682,"poster_path":"/6POBWybSBDBKjSs1VAQcnQC1qyt.jpg","vote_average":8.2,"vote_count":4796},{"backdrop_path":"/x0RRnWdYeczF4KXDqW8blda7SKS.jpg","first_air_date":"2022-03-28","genre_ids":[18,10766],"id":158415,"name":"Pantanal","origin_country":["BR"],"original_language":"pt","original_name":"Pantanal","overview":"After the mysterious disappearance of his father, Joventino, the cowboy José Leôncio becomes a wealthy farm owner in Pantanal. Over twenty years have passed and, bitter-hearted because of his father vanishing and the escape of his wife to Rio de Janeiro with his baby, José Leôncio has the chance to make amends with the boy, now a young man raised in the big city with very different values and habits than his own.","popularity":974.258,"poster_path":"/i1HJ7Eol9BRX3XH73vJV6lkIXP0.jpg","vote_average":5.7,"vote_count":47},{"backdrop_path":"/56v2KjBlU4XaOv9rVYEQypROD7P.jpg","first_air_date":"2016-07-15","genre_ids":[18,10765,9648],"id":66732,"name":"Stranger Things","origin_country":["US"],"original_language":"en","original_name":"Stranger Things","overview":"When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.","popularity":879.544,"poster_path":"/49WJfeN0moxb9IPfGn8AIqMGskD.jpg","vote_average":8.6,"vote_count":13478},{"backdrop_path":"/ffZvtM3kfTNC2w263SloZHbokCE.jpg","first_air_date":"2022-08-25","genre_ids":[18],"id":135250,"name":"Mike","origin_country":["US"],"original_language":"en","original_name":"Mike","overview":"Explore the wild, tragic and controversial life and career of heavyweight champion Mike Tyson - one of the most polarizing figures in sports culture.","popularity":981.543,"poster_path":"/iwoFJilBbno4MKfwiHWbUl2BZBp.jpg","vote_average":8.3,"vote_count":23},{"backdrop_path":"/wiE9doxiLwq3WCGamDIOb2PqBqc.jpg","first_air_date":"2013-09-12","genre_ids":[18,80],"id":60574,"name":"Peaky Blinders","origin_country":["GB"],"original_language":"en","original_name":"Peaky Blinders","overview":"A gangster family epic set in 1919 Birmingham, England and centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby, who means to move up in the world.","popularity":865.283,
      //     "poster_path":"/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg","vote_average":8.6,"vote_count":7334},{"backdrop_path":"/ic7YfRS52N3m4oalxoOIT665C33.jpg","first_air_date":"2020-07-08","genre_ids":[18,35],"id":104877,"name":"Love Is In The Air","origin_country":["TR"],"original_language":"tr","original_name":"Sen Çal Kapımı","overview":"Eda, who ties all her hopes to her education, confronts Serkan Bolat, who cuts off her international education scholarship and leaves her with high school diploma. Serkan Bolat offers Eda to give her scholarship back if she pretends to be his fiance for two months. Although Eda rejects the offer of this man as she hates him, she has to accept it when the conditions change. While pretending to be engaged, Serkan and Eda begin to experience a passionate, challenging relationship that will make them forget all they know right. Because love is difficult. And that's why it's amazing.","popularity":839.952,"poster_path":"/bE71f9A3eztjcd5JT3MmHB8MbzA.jpg","vote_average":8.2,"vote_count":2616},{"backdrop_path":"/7J5d7K4JBDZ4IDODNX3THLggtM5.jpg","first_air_date":"2005-03-27","genre_ids":[18],"id":1416,"name":"Grey's Anatomy","origin_country":["US"],"original_language":"en","original_name":"Grey's Anatomy","overview":"Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.","popularity":832.746,"poster_path":"/zPIug5giU8oug6Xes5K1sTfQJxY.jpg","vote_average":8.3,"vote_count":8366},{"backdrop_path":"/xZUZ9i6vVayjyhR1vRo9Bjku4h.jpg","first_air_date":"2016-01-25","genre_ids":[80,10765],"id":63174,"name":"Lucifer","origin_country":["US"],"original_language":"en","original_name":"Lucifer","overview":"Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape.","popularity":824.298,"poster_path":"/ekZobS8isE6mA53RAiGDG93hBxL.jpg","vote_average":8.5,"vote_count":12414},{"backdrop_path":"/wcbrJB42U6yQuwLC3icxJrjc52w.jpg","first_air_date":"2022-05-30","genre_ids":[35,10765],"id":152296,"name":"Love in 40 Days","origin_country":["PH"],"original_language":"tl","original_name":"Love in 40 Days","overview":"After getting involved in a fatal car crash, a competitive career woman arrives in an uncanny purgatory. While settling her unfinished businesses as a lingering spirit, she meets and finds her soulmate in a rebellious scion with a third eye.","popularity":487.907,"poster_path":"/x7qeqSNB5wN93U2EvOniELSXuNz.jpg","vote_average":3.9,"vote_count":5},{"backdrop_path":"/escBySi78E2rcrphN973x7txmJq.jpg","first_air_date":"2022-08-15","genre_ids":[10759,10765,18],"id":121750,"name":"Darna","origin_country":["PH"],"original_language":"tl","original_name":"Darna","overview":"When fragments of a green crystal scatter in the city and turn people into destructive monsters, Narda embraces her destiny as Darna—the mighty protector of the powerful stone from Planet Marte.","popularity":478.855,"poster_path":"/aGU7nlFkYeQGUhkPtC2iqrHXxWT.jpg","vote_average":6,"vote_count":2},{"backdrop_path":"/fMvRiykSZrb5KCQnHxe3dNN5XKX.jpg","first_air_date":"2022-06-27","genre_ids":[18],"id":194619,"name":"A Family Affair","origin_country":["PH"],"original_language":"tl","original_name":"A Family Affair","overview":"An inheritance from the late matriarch of the Estrellas intertwines the life of Cherry Red with Dave, Paco, Seb, and Drew. Amid the romance that arose between her and two of the four brothers, Cherry's past unravels and exposes deeply buried secrets.","popularity":475.37,"poster_path":"/gkap4pWN722E0UK9WNL2vjGnAtw.jpg","vote_average":3.2,"vote_count":6}];
      const mRequest = await axios.get(popMoviesURL)
      const sRequest = await axios.get(popShowsURL)
      let movies = mRequest.data.results
      let shows = sRequest.data.results
      let topTen = movies.concat(shows)
      setTop(
        topTen
          .sort((a, b) => (a.popularity > b.popularity ? -1 : 1))
          .slice(0, 10)
      )
    }

    fetchData()
  }, [])

  return (
    <div className='footer'>
      <h3 className='footer-title'>Popular now</h3>
      <div className='topTen'>
        {top.map((data, index) => {
          if (data.release_date) {
            return (
              <a
                href={`/id/movie/${data.id}`}
                className='topTenMovie'
                key={data.id}
              >
                <img src={base_imgURL + data.poster_path} alt='moviePoster' />
                <h1 className='top-left'>{index + 1}</h1>
              </a>
            )
          }
          return (
            <a href={`/id/tv/${data.id}`} className='topTenMovie' key={data.id}>
              <img src={base_imgURL + data.poster_path} alt='moviePoster' />
              <h1 className='top-left'>{index + 1}</h1>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Footer
