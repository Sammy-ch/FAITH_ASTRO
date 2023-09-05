import React from "react";
import EChartsReact from "echarts-for-react";


function PieHalf() {
    const eChartsOption = {
        title: {
            text: "116 416 enfants bénéficiaires des services adéquats de protection dont :",
        },
        tooltip: {
            trigger: 'item'
          },
        legend: {
            top: "5%",
            left: 'center',
            // doesn't perfectly work with our tricks, disable it
            selectedMode: false
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              center: ['50%', '70%'],
              // adjust the start angle
              startAngle: 180,
              label: {
                show: true,
                formatter(param) {
                  // correct the percentage
                  return param.name + ' (' + param.percent * 2 + '%)';
                }
              },
              data: [
                { value: 34273, name: "Enfants exposées aux situations d'abus et autres violences ont bénéficié d'un accompagnement psychosocial et suivi à travers des visites hebdomadaires et au niveau de nos centres " },
                { value: 3456 , name: "Enfants retirés des situations dangereuses (situations de rues, vie dans les immondices, et des réseaux d'exploitation sexuel, littoral du lac Tanganyika etc.) ont  reçus ont été réintégré à l'école/ ou en formation professionnelle " },
                { value: 10136 , name: "Enfants vulnérables ont bénéficié des services spécialisés (assistance juridique, suivi médical, référencement et suivi) par les travailleurs sociaux de Foi en Action ou de ses partenaires" },
                { value: 31344 , name: "Enfants ont reçu des services divers comme l'appui alimentaire, Hébergement temporaire, encadrement au niveau de la communauté,…" },
                { value: 15388 , name: "Enfants vulnérables ont été enregistrés dans les services de l'état civil et ont reçus des extraits d'acte de naissances." },
                { value: 534 , name: "Enfants moins de 5ans ont été encadré  pour le développement de la petite enfance grâce aux 4 crèches mise en place et gérée par la communauté " },
                { value: 21286 , name: 'Enfants ayant reçu des kits scolaires pour faciliter leur réintégration' },
        
                {
                  // make an record to fill the bottom 50%
                  value: 34273 + 3456 + 10136 + 31344 + 15388 + 534 + 21286,
                  itemStyle: {
                    // stop the chart from rendering this piece
                    color: 'none',
                    decal: {
                      symbol: 'none'
                    }
                  },
                  label: {
                    show: false
                  }
                }
              ]
            }
          ]
    }


  return (
      <div style={
        {
            padding: "50px",
            height:"650%"
        }
    }>  
          <EChartsReact style={{
              width: "100%",
              height:"650%"
          }} option={eChartsOption}/>
    </div>
  )
}

export default PieHalf