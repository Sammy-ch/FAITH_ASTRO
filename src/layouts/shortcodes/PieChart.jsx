import EChartsReact from "echarts-for-react";
import React from 'react'

function PieChart() {
    const eChartsOption = {
        title: {
            text: "53972 ménages ont été impactées par les interventions de Foi en Action dont :"
        },
            legend: {
                top: 'bottom',
            },
            toolbox: {
              show: true,
              feature: {
                mark: { show: true },
                saveAsImage: { show: true }
              }
            },
            series: [
              {
                name: 'Nightingale Chart',
                type: 'pie',
                radius: [50, 250],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                  borderRadius: 8
                },
                data: [
                  { value: 23178, name: '(23 178) Membres de la communauté ayant reçu un accompagnement socioéconomique grâce à la participation dans les SHG dont 97% ont déjà des AGR' },
                  { value: 1971, name: '(1971) Femmes coachées individuellement pour la promotion des Activités Génératrice de Revenu' },
                  { value: 10604, name: "(10 604) Personnes connectées aux institutions de microfinance pour l'accroissement de capitaux" },
                  { value: 18739, name: "(18 739) Personnes à majorité femmes sensibilisées sur les thématiques de leadership féminin, la promotion des droits de l'enfant et de la femme, l'adoption de bonnes pratiques nutritionnelle et la santé sexuelle et reproductive "},
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
          }} option={eChartsOption} />
    </div>
  )
}

export default PieChart;