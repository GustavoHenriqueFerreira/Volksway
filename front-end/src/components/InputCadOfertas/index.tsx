<section>
          <div className="cad_ofertas_bluer">
            <div className="cad_ofertas_input">
              <div className="cad_ofertas_inpcad">
                <span>Cadastro de Campanha</span>
                <form>
                  <div className="p1">
                    <div className="coluna">
                      <label htmlFor="">Código</label>
                      <input type="number" />
                    </div>
                    <div className="coluna">
                      <label htmlFor="">Nome da Propaganda</label>
                      <input type="text" />
                    </div>
                    <div className="coluna">
                      <label htmlFor="">Tipo de Propaganda</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="p1_none">
                    <div className="coluna">
                      <label htmlFor="">Tipo de Propaganda</label>
                      <input type="text" />
                    </div>
                    <div className="coluna">
                      <label htmlFor="">Canal</label>
                      <select name="canal" required>
                        <option value="canais">Todos os canais</option>
                        <option value="Site">Site</option>
                        <option value="Mobile">Mobile</option>
                      </select>
                    </div>
                  </div>
                  <div className="p1">
                    <div className="coluna">
                      <label htmlFor="">Posição do Banner</label>
                      <select name="plataforma" required>
                        <option value="BannerMenu">Banner Menu</option>
                        <option value="BannerHome">Banner Home</option>
                        <option value="Categorias">Categorias</option>
                        <option value="Acessorios">Acessorios</option>
                        <option value="Ofertas">Ofertas</option>
                        <option value="Acessorios">Acessorios</option>
                      </select>
                    </div>
                    <div className="coluna">
                      <label htmlFor="">Usuario</label>
                      <select name="usuarios" required>
                        <option value="motorista">Motorista</option>
                        <option value="admFrota">Adm Frota</option>
                        <option value="propietario">Propietario</option>
                        <option value="todos">Todos</option>
                      </select>
                    </div>
                    <div className="coluna">
                      <label htmlFor="">Canal</label>
                      <select name="canal" required>
                        <option value="canais">Todos os canais</option>
                        <option value="Site">Site</option>
                        <option value="Mobile">Mobile</option>
                      </select>
                    </div>
                  </div>
                  <div className="p1">
                    <div className="coluna">
                      <label>Selecione o Banner </label>
                      <input className="arq" type="file" />
                    </div>
                    <div className="coluna inp">
                      <label htmlFor="">Descrição do Banner</label>
                      <input type="text-area" />
                    </div>
                  </div>
                  <div className="p1 ">
                    <div className="coluna data">
                      <label>Data inicial </label>
                      <input type="date" />
                    </div>
                    <div className="coluna data">
                      <label htmlFor="">Data Final</label>
                      <input type="date" />
                    </div>
                  </div>
                </form>
                <div className="btns p1">
                  <button type="submit">Salvar</button>
                  <button>Cancelar</button>
                </div>
              </div>
            </div>
          </div>
        </section>
 