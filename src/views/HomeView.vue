<template>
  <div class="container text-start">
    <div class="d-grid d-lg-flex gap-3 mt-3">
      <div class="main-content">

        <!-- SLIDER -->
        <div class="slider">
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            </div>

            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../assets//img/slide-3.jpg">
              </div>
              <div class="carousel-item">
                <img src="../assets//img/slide-3.jpg">
              </div>
              <div class="carousel-item">
                <img src="../assets//img/slide-3.jpg">
              </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <!-- ARTICLE -->
        <div class="article">
          <div class="title font-46"> LAST <span class="sub">NEWS</span></div>

          <hr class="h-divider" />

          <!-- ARTICLE HEADLINE -->
          <div class="article-headline">
            <div class="d-lg-flex d-grid column-gap-3">
              <div class="article-headline-image">
                <img src="https://rfchampion.net/_uploads/image/eent.jpg" alt="">
              </div>
              <div class="article-headline-content">
                <div class="article-headline-title title font-18">
                  <span class="badge badge-danger">NEWS</span> EVENT LIGA CHIP BREAKER
                </div>
                <p class="article-headline-preview">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae maiores neque voluptate eius dolorem
                  quisquam earum saepe aliquam sequi culpa dolor deserunt libero, dolorum laboriosam repellat laudantium
                  quae magnam itaque.
                </p>
                <div class="d-flex align-items-center justify-content-between">
                  <button class="btn btn-outline btn-outline-primary">More..</button>
                  <div class="time-upload text-dark">
                    25.07.2023 at 23:05:47
                  </div>
                </div>
              </div>

            </div>
          </div>

          <hr class="h-divider"/>

          <!-- ARTICLE HILIGHT -->
          <div class="article-hilight">
            <div class="d-lg-flex d-grid column-gap-3 align-items-center">
              <div class="article-hilight-title title font-18">
                <span class="badge badge-danger">NEWS</span> EVENT LIGA CHIP BREAKER
              </div>
              <div class="time-upload text-dark">
                25.07.2023 at 23:05:47
              </div>
            </div>
          </div>

          <hr class="h-divider"/>

          <div class="article-hilight">
            <div class="d-lg-flex d-grid column-gap-3 align-items-center">
              <div class="article-hilight-title title font-18">
                <span class="badge badge-danger">NEWS</span> EVENT LIGA CHIP BREAKER
              </div>
              <div class="time-upload text-dark">
                25.07.2023 at 23:05:47
              </div>
            </div>
          </div>

          <hr class="h-divider"/>

          <div class="article-hilight">
            <div class="d-lg-flex d-grid column-gap-3 align-items-center">
              <div class="article-hilight-title title font-18">
                <span class="badge badge-danger">NEWS</span> EVENT LIGA CHIP BREAKER
              </div>
              <div class="time-upload text-dark">
                25.07.2023 at 23:05:47
              </div>
            </div>
          </div>

          <hr class="h-divider"/>

          <div class="article-hilight">
            <div class="d-lg-flex d-grid column-gap-3 align-items-center">
              <div class="article-hilight-title title font-18">
                <span class="badge badge-danger">NEWS</span> EVENT LIGA CHIP BREAKER
              </div>
              <div class="time-upload text-dark">
                25.07.2023 at 23:05:47
              </div>
            </div>
          </div>

          <hr class="h-divider"/>


        </div>
      </div>

      <!-- WIDGET -->
      <div class="widget d-grid gap-2">

        <!-- SERVER STATUS -->
        <div class="server-status">
          <h2>SERVER STATUS DAN JUMLAH PLAYER</h2>
        </div>

        <!-- CHIP STATUS -->
        <div class="chip-status">
          <h2>CHIP WAR STATUS</h2>
        </div>

        <!-- TOP KILLER -->
        <div class="top-killer">
          <ul class="nav nav-pills nav-fill">
            <li class="nav-item">
              <button class="nav-link btn-sm active" data-bs-toggle="pill" data-bs-target="#daily-top-killer"
                type="button" role="tab">
                Daily Top Killer
              </button>
            </li>
            <li class="nav-item">
              <button class="nav-link" data-bs-toggle="pill" data-bs-target="#monthly-top-killer" type="button"
                role="tab">
                Monthly Top Killer
              </button>
            </li>
          </ul>

          <div class="tab-content" id="pills-tabContent">

            <!-- DAILY TOP KILLER -->
            <div class="tab-pane fade show active" id="daily-top-killer" role="tabpanel">
              <table class="top-killer-table">
                <tbody>
                  <tr>
                    <td>
                      <div class="icon">
                        <img src="https://rfchampion.net/assets/images/class/BWS3.png" alt="">
                      </div>
                    </td>
                    <td>
                      <div class="nickname">
                        <img src="https://rfchampion.net/assets/images/races/bellato.gif" alt="">
                        Nickname <span class="guild font-9">Guild: R</span>
                      </div>
                      <div class="grid d-flex gap-2">
                        <div class="kd-ratio">
                          <span class="font-10">K: 1251</span>
                        </div>
                        <div class="kd-ratio">
                          <span class="font-10">D: 1251</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="icon">
                        <img src="https://rfchampion.net/assets/images/class/BWS3.png" alt="">
                      </div>
                    </td>
                    <td>
                      <div class="nickname">
                        <img src="https://rfchampion.net/assets/images/races/bellato.gif" alt="">
                        Nickname <span class="guild font-9">Guild: R</span>
                      </div>
                      <div class="grid d-flex gap-2">
                        <div class="kd-ratio">
                          <span class="font-10">K: 1251</span>
                        </div>
                        <div class="kd-ratio">
                          <span class="font-10">D: 1251</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="icon">
                        <img src="https://rfchampion.net/assets/images/class/BWS3.png" alt="">
                      </div>
                    </td>
                    <td>
                      <div class="nickname">
                        <img src="https://rfchampion.net/assets/images/races/bellato.gif" alt="">
                        Nickname <span class="guild font-9">Guild: R</span>
                      </div>
                      <div class="grid d-flex gap-2">
                        <div class="kd-ratio">
                          <span class="font-10">K: 1251</span>
                        </div>
                        <div class="kd-ratio">
                          <span class="font-10">D: 1251</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="icon">
                        <img src="https://rfchampion.net/assets/images/class/BWS3.png" alt="">
                      </div>
                    </td>
                    <td>
                      <div class="nickname">
                        <img src="https://rfchampion.net/assets/images/races/bellato.gif" alt="">
                        Nickname <span class="guild font-9">Guild: R</span>
                      </div>
                      <div class="grid d-flex gap-2">
                        <div class="kd-ratio">
                          <span class="font-10">K: 1251</span>
                        </div>
                        <div class="kd-ratio">
                          <span class="font-10">D: 1251</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="icon">
                        <img src="https://rfchampion.net/assets/images/class/BWS3.png" alt="">
                      </div>
                    </td>
                    <td>
                      <div class="nickname">
                        <img src="https://rfchampion.net/assets/images/races/bellato.gif" alt="">
                        Nickname <span class="guild font-9">Guild: R</span>
                      </div>
                      <div class="grid d-flex gap-2">
                        <div class="kd-ratio">
                          <span class="font-10">K: 1251</span>
                        </div>
                        <div class="kd-ratio">
                          <span class="font-10">D: 1251</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>


            </div>

            <!-- MONTHLY TOP KILLER -->
            <div class="tab-pane fade" id="monthly-top-killer" role="tabpanel">
              <table class="top-killer-table">
                <tbody>
                  <tr>
                    <td>
                      <div class="icon">
                        <img src="https://rfchampion.net/assets/images/class/BWS3.png" alt="">
                      </div>
                    </td>
                    <td>
                      <div class="nickname">
                        <img src="https://rfchampion.net/assets/images/races/bellato.gif" alt="">
                        Nickname <span class="guild font-9">Guild: R</span>
                      </div>
                      <div class="grid d-flex gap-2">
                        <div class="kd-ratio">
                          <span class="font-10">K: 1251</span>
                        </div>
                        <div class="kd-ratio">
                          <span class="font-10">D: 1251</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="icon">
                        <img src="https://rfchampion.net/assets/images/class/BWS3.png" alt="">
                      </div>
                    </td>
                    <td>
                      <div class="nickname">
                        <img src="https://rfchampion.net/assets/images/races/bellato.gif" alt="">
                        Nickname <span class="guild font-9">Guild: R</span>
                      </div>
                      <div class="grid d-flex gap-2">
                        <div class="kd-ratio">
                          <span class="font-10">K: 1251</span>
                        </div>
                        <div class="kd-ratio">
                          <span class="font-10">D: 1251</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="icon">
                        <img src="https://rfchampion.net/assets/images/class/BWS3.png" alt="">
                      </div>
                    </td>
                    <td>
                      <div class="nickname">
                        <img src="https://rfchampion.net/assets/images/races/bellato.gif" alt="">
                        Nickname <span class="guild font-9">Guild: R</span>
                      </div>
                      <div class="grid d-flex gap-2">
                        <div class="kd-ratio">
                          <span class="font-10">K: 1251</span>
                        </div>
                        <div class="kd-ratio">
                          <span class="font-10">D: 1251</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="icon">
                        <img src="https://rfchampion.net/assets/images/class/BWS3.png" alt="">
                      </div>
                    </td>
                    <td>
                      <div class="nickname">
                        <img src="https://rfchampion.net/assets/images/races/bellato.gif" alt="">
                        Nickname <span class="guild font-9">Guild: R</span>
                      </div>
                      <div class="grid d-flex gap-2">
                        <div class="kd-ratio">
                          <span class="font-10">K: 1251</span>
                        </div>
                        <div class="kd-ratio">
                          <span class="font-10">D: 1251</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="icon">
                        <img src="https://rfchampion.net/assets/images/class/BWS3.png" alt="">
                      </div>
                    </td>
                    <td>
                      <div class="nickname">
                        <img src="https://rfchampion.net/assets/images/races/bellato.gif" alt="">
                        Nickname <span class="guild font-9">Guild: R</span>
                      </div>
                      <div class="grid d-flex gap-2">
                        <div class="kd-ratio">
                          <span class="font-10">K: 1251</span>
                        </div>
                        <div class="kd-ratio">
                          <span class="font-10">D: 1251</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>


        <!-- DISCORD -->
        <div class="discord">
          <iframe src="https://discord.com/widget?id=1117888570414346244&theme=light" width="100%" height="300"
            frameborder="0"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
