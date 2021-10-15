import React, { Component } from 'react';

const FamilyContext = React.createContext();

class GreatGrandfather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inheritance: 1000000,
    }
    this.spendInheritance = this.spendInheritance.bind(this);
  }

  spendInheritance() {
    this.setState((prevState) => ({ inheritance: prevState.inheritance - 1000 }));
  }

  render() {
    const contextValue = {
      inheritance: this.state.inheritance,
      spendInheritance: this.spendInheritance
    };

    return (
      <FamilyContext.Provider value={contextValue}>
        <Grandmother />
      </FamilyContext.Provider>
    );
  }
}

function Grandmother(props) {
  return <Father />;
}

function Father(props) {
  return <Daughter />;
}

function Daughter() {
  return (
    <FamilyContext.Consumer>
      {({ inheritance, spendInheritance }) => ( //desestruturou o value
        <div>
          <span>
            `Tenho uma herança de R$ ${inheritance} que recebi do meu bisavô`
          </span>
          <button type="button" onClick={spendInheritance}/>
        </div>
      )}
    </FamilyContext.Consumer>
  );
}

// Observe que agora Father e Daughter não recebem props. Daughter acessa o estado diretamente, utilizando um Provider . Sem mais prop drilling !