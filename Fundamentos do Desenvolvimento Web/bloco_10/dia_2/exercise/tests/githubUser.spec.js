const getRepos = require('../githubUser');

describe('Recupera na API nomes de repositorios', () => {
  it('Testando se a busca dos links de algumas turmas está correta',  async() => {
    const url = 'https://api.github.com/orgs/tryber/repos';
    const data = await getRepos(url);
    expect(data).toContain('sd-01-week4-5-project-todo-list');
    expectt(data).toContain('sd-01-week4-5-project-meme-generator');
  })
})