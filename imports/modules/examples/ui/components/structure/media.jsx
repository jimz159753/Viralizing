import React from 'react';

class MediaExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title">Media</h1>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="../index.html">Home</a></li>
            <li className="breadcrumb-item active">Structure</li>
          </ol>
          <div className="page-header-actions">
            <form>
              <div className="input-search input-search-dark">
                <i className="input-search-icon wb-search" aria-hidden="true"/>
                <input type="text" className="form-control" name placeholder="Search..."/>
              </div>
            </form>
          </div>
        </div>
        <div className="page-content">
          <div className="panel">
            <div className="panel-body container-fluid">
              <div className="row row-lg">
                <div className="col-xl-6">
                  {/* Example Default Media Object */}
                  <div className="example-wrap">
                    <h4 className="example-title">Default Media Object</h4>
                    <p>The default media displays a media object (images, video, audio)
                      to the left or right of a content block.</p>
                    <div className="example">
                      <div className="media">
                        <div className="pr-20">
                          <a href="javascript:void(0)">
                            <img className="w-120"
                                 src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="mt-0 mb-5">Media Heading</h4>
                          Diogenem. Utuntur iudicabit meo dicent idem tenere infinitis naturae diligant attico,
                          placet homero futuris cognita platone inesse adolescens optio,
                          ennius ego voluptati.
                        </div>
                      </div>
                      <div className="media mt-20">
                        <div className="pr-20">
                          <a href="javascript:void(0)">
                            <img className="w-120"
                                 src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="mt-0 mb-5">Media Heading</h4>
                          Epicureum, uti cognitionem novi inprobitas angatur assentior, videtisne dicturum
                          meam praeterierunt desistemus laudatur gravissimis. Simul
                          pertineant, libris timiditatem potiendi.
                          <div className="media mt-20">
                            <div className="pr-20">
                              <a href="javascript:void(0)">
                                <img className="w-120"
                                     src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                              </a>
                            </div>
                            <div className="media-body">
                              <h4 className="mt-0 mb-5">Media Heading</h4>
                              Fecerint iniuste, vituperatoribus aequum videbitur ignem, eaque certissimam asperum
                              adhuc oratoribus pueriliter mediocrem. Dirigentur. Ocurreret
                              turpis quiete tanta alter.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="media mt-20">
                        <div className="pr-20">
                          <a href="javascript:void(0)">
                            <img className="w-120"
                                 src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="mt-0 mb-5">Media Heading</h4>
                          Approbantibus aequi eitam miser omittam relinqueret adolescens statu cognitionem
                          dixisset, vacillare plus atomus, inanes putamus aliquod,
                          praeterierunt sentiant teneam universas.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Default Media Object */}
                </div>
                <div className="col-xl-6">
                  {/* Example Media List */}
                  <div className="example-wrap">
                    <h4 className="example-title">Media List</h4>
                    <p>With a bit of extra markup, you can use media inside list (useful
                      for comment threads or articles lists).</p>
                    <div className="example">
                      <div className="media">
                        <div className="pr-20">
                          <a href="javascript:void(0)">
                            <img className="w-120"
                                 src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="mt-0 mb-5">Media Heading</h4>
                          Democritum id tenebo non est nostrud id nulla ullamco ut cillum consectetur aliquip
                          ex cillum ut consequat velit elit eu veniam elit esse deserunt
                          esse.
                          <div className="media mt-20">
                            <div className="pr-20">
                              <a href="javascript:void(0)">
                                <img className="w-120"
                                     src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                              </a>
                            </div>
                            <div className="media-body">
                              <h4 className="mt-0 mb-5">Nested Media Heading</h4>
                              Grata quidam levis suspicor sententiae videtisne traditur centurionum rerum eram
                              pellat, sublata maiorem porrecta ferreum. Unam soliditatem
                              oritur omnibus inane faciend.
                            </div>
                          </div>
                          <div className="media mt-20">
                            <div className="pr-20">
                              <a href="javascript:void(0)">
                                <img className="w-120"
                                     src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                              </a>
                            </div>
                            <div className="media-body">
                              <h4 className="mt-0 mb-5">Nested Media Heading</h4>
                              Delectu, commenticiam potius non poetarum iucunditas corrupte eaque eae, earum
                              adolescens nihilo individua, malunt congressus his, modus
                              asperum desideret moveat degendae amicitiae.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="media mt-20">
                        <div className="pr-20">
                          <a href="javascript:void(0)">
                            <img className="w-120"
                                 src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="mt-0 mb-5">Nested Media Heading</h4>
                          Iudicat infinito nominant consuetudine intervalla malint res quosdam postea meque,
                          voluptatis multam degendae leguntur ipsi democriti iucunditatem
                          optimus expedita errore.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Media List */}
                </div>
              </div>
              <div className="row row-lg">
                <div className="col-xl-6">
                  {/* Example Media List With Avatar */}
                  <div className="example-wrap">
                    <h4 className="example-title">Media List With Avatar</h4>
                    <p>This media displayed by avatar style which can be used in social
                      user profile page or projects.</p>
                    <div className="example">
                      <div className="media">
                        <div className="pr-20">
                          <a className="avatar avatar-lg" href="javascript:void(0)">
                            <img src="http://getbootstrapadmin.com/remark/global/portraits/2.jpg" alt="..."/>
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="mt-0 mb-5">Media Heading</h4>
                          Gravissimis iniurias gravissimis admodum puto fidelissimae veterum crudeli desiderat,
                          libenter vituperata, discordia maiorum amori oblique videor.
                          Perfruique commodis atque servare.
                        </div>
                      </div>
                      <div className="media mt-20">
                        <div className="pr-20">
                          <a className="avatar avatar-lg" href="javascript:void(0)">
                            <img src="http://getbootstrapadmin.com/remark/global/portraits/3.jpg" alt="..."/>
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="mt-0 mb-5">Nested Media Heading</h4>
                          Testibus intellegamus gerendarum fecisse, iactare sanguinem inopem inscientia,
                          meo situm, detrimenti hominibus, privatione praetore que
                          affectus egregios audaces percipit cernantur.
                        </div>
                      </div>
                      <div className="media mt-20">
                        <div className="pr-20">
                          <a className="avatar avatar-lg" href="javascript:void(0)">
                            <img src="http://getbootstrapadmin.com/remark/global/portraits/4.jpg" alt="..."/>
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="mt-0 mb-5">Nested Media Heading</h4>
                          Aliquod virtus admonitionem cyrenaicos maximam, unam vivatur praeterea partis migrare
                          cui adhibenda ludicra industriae, ratio pro, perspiciatis
                          aptior amicis videretur vendibiliora.
                        </div>
                      </div>
                      <div className="media mt-20">
                        <div className="pr-20">
                          <a className="avatar avatar-lg" href="javascript:void(0)">
                            <img src="http://getbootstrapadmin.com/remark/global/portraits/5.jpg" alt="..."/>
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="mt-0 mb-5">Nested Media Heading</h4>
                          Quaeso privamur, honeste paulo, offendimur comparandae dum inpendente ruinae liber
                          ferrentur quietus. Quondam laboriosam impedit mortem cogitarent
                          te, talem modus existimare locupletiorem.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Media List With Avatar */}
                </div>
                <div className="col-xl-6">
                  {/* Example Media Object Sizes */}
                  <div className="example-wrap">
                    <h4 className="example-title">Media Object Sizes</h4>
                    <p>Add another four optional classes to change a media object’s size.
                    </p>
                    <div className="example">
                      <div className="media">
                        <div className="pr-20">
                          <a href="javascript:void(0)">
                            <img className="w-60"
                                 src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="mt-0 mb-5">Media Heading</h4>
                          Admonere ludus scriptorem malo denique tertium totum omne alliciat depravare, suas
                          iudico d plurimum appellant solitudo patrius, arridens numquid
                          causa aristoteli veniamus reformidans.
                        </div>
                      </div>
                      <div className="media mt-20">
                        <div className="pr-20">
                          <a href="javascript:void(0)">
                            <img className="w-80"
                                 src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="mt-0 mb-5">Media Heading</h4>
                          Intellegaturque bonum aliquip dolore nostrud labore in amet culpa tempor dolore
                          sunt id in cupidatat laborum voluptate occaecat commodo officia
                          reprehenderit veniam non est laboris.
                        </div>
                      </div>
                      <div className="media mt-20">
                        <div className="pr-20">
                          <a href="javascript:void(0)">
                            <img className="w-120"
                                 src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="mt-0 mb-5">Media Heading</h4>
                          Periculis dicitis intemperantes cohaerescent nostras moveat etenim sanguinem, ferae
                          huc labor fruuntur fortunae monet chrysippo octavio ponunt
                          politus optabilem Etiam.
                        </div>
                      </div>
                      <div className="media mt-20">
                        <div className="pr-20">
                          <a href="javascript:void(0)">
                            <img className="w-160"
                                 src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="mt-0 mb-5">Media Heading</h4>
                          Filio levitatibus graecos discenda videntur, falli instituendarum vester dedocendi
                          partus quis videri honoris. Maximeque splendore sint dixit
                          Tantopere praeclarorum nimis.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Media Object Sizes */}
                </div>
              </div>
              <div className="row row-lg">
                <div className="col-xl-6">
                  {/* Example Media List With Button */}
                  <div className="example-wrap m-lg-0">
                    <h4 className="example-title">Media List With Button</h4>
                    <p>This object styles for building various types of components (like
                      user profile) that feature a left- or right-aligned image alongside
                      textual content.</p>
                    <div className="example">
                      <div className="media">
                        <div className="pr-20">
                          <a className="avatar avatar-lg" href="javascript:void(0)">
                            <img src="http://getbootstrapadmin.com/remark/global/portraits/2.jpg" alt="..."/>
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="mt-0 mb-5">Media Heading</h4>
                          Bono delectus persius diceretur. Cyrenaicisque fortitudinis consuetudinum vitam
                          concupiscunt controversia neglegit, totus praestabiliorem
                          me, corrigere bonarum inter iisque numeranda allevatio.
                          <p className="mt-10">
                            <a className="btn btn-sm btn-warning" href="javascript:void(0)" role="button">Edit</a>
                            <a className="btn btn-sm btn-default" href="javascript:void(0)" role="button">Cancel</a>
                          </p>
                        </div>
                      </div>
                      <div className="media mt-20">
                        <div className="pr-20">
                          <a className="avatar avatar-lg" href="javascript:void(0)">
                            <img src="http://getbootstrapadmin.com/remark/global/portraits/3.jpg" alt="..."/>
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="mt-0 mb-5">Media Heading</h4>
                          Sententia minorem, vivere ferae corrumpit adhaesiones fecisse atomum poenis atomorum
                          novi ludus, veterum, modi habendus percipi sanciret operam.
                          Lictores corpus.
                          <p className="mt-10">
                            <a className="btn btn-sm btn-danger" href="javascript:void(0)" role="button">Confirm</a>
                            <a className="btn btn-sm btn-default" href="javascript:void(0)" role="button">Cancel</a>
                          </p>
                        </div>
                      </div>
                      <div className="media mt-20">
                        <div className="pr-20">
                          <a className="avatar avatar-lg" href="javascript:void(0)">
                            <img src="http://getbootstrapadmin.com/remark/global/portraits/4.jpg" alt="..."/>
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="mt-0 mb-5">Media Heading</h4>
                          Tuemur imperii pugnare regula calere dominorum falso erroribus, temporibus illustribus
                          eveniunt, sequitur disserunt compluribus studio concederetur
                          tractatas quosdam repugnantibus tractavissent.
                          <p className="mt-10">
                            <a className="btn btn-sm btn-primary" href="javascript:void(0)" role="button">Save</a>
                            <a className="btn btn-sm btn-default" href="javascript:void(0)" role="button">Cancel</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Media List With Button */}
                </div>
                <div className="col-xl-6">
                  {/* Example Media Alignment */}
                  <div className="example-wrap">
                    <h4 className="example-title">Media Alignment</h4>
                    <p>The images or other media can be aligned top, middle, or bottom.
                      The default is top aligned.</p>
                    <div className="example">
                      <div className="media">
                        <div className="pr-20">
                          <a href="javascript:void(0)">
                            <img className="w-120"
                                 src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="mt-0 mb-5">Top Aligned Media</h4>
                          <p>Tractat audita quantumcumque atilii, aegritudo neque iactant
                            nominata disputari appellantur studiis. Quaeri prospexit
                            expectant repugnantiumve inportuno, angore, arbitrarer
                            suscipit epularum potiendi, tali copiosae signiferumque
                            fingitur cognitione, animumque recte praetore studium.
                            Utinam torqueantur aequo sitisque illud fugiat, manilium
                            faciendumve ipsi erunt doloris persius difficilem indignius.
                            Maximam evolutio repugnantiumve generis splendore diceretur
                            quaeso, verbum erga liquidae historiae perfunctio eveniunt,
                            concursionibus duce usus disserui declinare angoribus cognitio
                            nihilo municipem, iucundo consequuntur bonum occulte quidam,
                            comit attingere sollicitare praeterea atqui ceterorum molita,
                            inimicus consedit, dominorum dixissem viris disputata,
                            de consul, aspernari autem turbulentaeque concordia consentientis
                            labor electram, vituperatoribus sapientium.</p>
                        </div>
                      </div>
                      <div className="media mt-20">
                        <div className=" pr-20 media-middle">
                          <a href="javascript:void(0)">
                            <img className="w-120"
                                 src="http://getbootstrapadmin.com/remark/global/photos/placeholder.png" alt="..."/>
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="mt-0 mb-5">Middle Aligned Media</h4>
                          <p>Suam suscipiantur maius propositum atomi. Quia nondum similia
                            accedit tueri iuste, tibique aegritudo quaerenda illa honesto
                            dicas poenis dissentientium. Tranquilli suspicio finitas
                            usque optime alienus, sentiunt plerumque, laetitiam proprius
                            suam maluisti asperiores discordans voluptaria referenda
                            inprobitas atomus. Multo provincia conspiratione loquerer
                            perspici imperitos, appetendum turpis geometrica singulos
                            optimi partiendo. Gerendarum atilii censes nulli stabilitas
                            finis falso nusquam ignavia, secumque tertio fruuntur familias
                            litteris suscipiantur benivole putat, umbram frustra instructior
                            permulta aeternum sermone posset interiret, afferre pararetur
                            difficile, delectant simplicem partis finiri locus expetenda
                            voluptatem. Dicenda accusantibus doctissimos intellegi
                            adversantur egregios nostra veniamus, discordiae dolorem
                            amicitias.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Example Media Alignment */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MediaExample;
