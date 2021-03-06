import React from 'react'

import ChoixItem from '../choix-Item/choix-item.component'

import './categorie.styles.scss'



class Categories extends React.Component {

  constructor() {

    super()



    this.stage = {

        sections : [
  
          {
            titre: 'chapeaux',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1
          },
  
          {
            titre: 'vestes',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2
          },
  
          {
            titre: 'baskets',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3
          },
  
          {
            titre: 'femmes',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            id: 4,
            taille: 'large',
          },
  
          {
            titre: 'hommes',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            id: 5,
            taille: 'large',
          }
  
        ]
  
      }

  }



  render() {

    return (

        <div className="categories">
            {
              this.stage.sections.map(({titre, imageUrl, id, taille}) => (
              <ChoixItem key={id} titre={titre} imageUrl={imageUrl} taille={taille}/>
            ))
            }

        </div>
    )
  }
}

export default Categories