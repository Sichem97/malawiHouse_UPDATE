import React from 'react'
import { Link } from 'react-router'

function AllPost() {
  return (
        <div className="page">
                <section class="section novi-background section-sm">
    <div class="container">
      <div class="layout-bordered">
        <div class="layout-bordered-item wow-outer">
          <div class="layout-bordered-item-inner wow slideInUp">
            <div class="icon novi-icon icon-lg text-primary"><h4>--- All Post ---</h4></div>
          </div>
        </div>
      </div>
    </div>
  </section>

    <div class="band">
            <div class="item-1">
                <Link class="card">
                <div class="thumb" style={{}}></div>
                <article>
                    <h1>We announce five new buildings by March, 2025</h1>
                    <span>Yotcheb Jhon</span>
                </article>
                </Link>
            </div>

            <div class="item-2">
                <Link class="card">
                <div class="thumb" style={{}}></div>
                <article>
                    <h1>We announce five new buildings by July, 2025</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aperiam labore sit, maxime eum consectetur veritatis dolorem cum quos doloremque quis animi dolore, repudiandae optio hic vel provident dolores quia.</p>
                    <span>Memory N.</span>
                </article>
                </Link>
            </div>

            <div class="item-3">
                <Link class="card">
                <div class="thumb" style={{}}></div>
                <article>
                    <h1>Created for You, In Lumbadzi</h1>
                    <p>Welcome to our new house design of fantastic houses created for you, Malawi community! </p>
                    <span>Priscilla</span>
                </article>
                </Link>
            </div>

            <div class="item-4">
                <Link class="card">
                <div class="thumb" style={{}}></div>
                <article>
                    <h1>How to Ensure your house</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora atque totam ipsum perspiciatis officia eaque.</p>
                    <span>Sichem M.</span>
                </article>
                </Link>
            </div>

            <div class="item-5">
                <Link class="card">
                <div class="thumb" style={{}}></div>
                <article>
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi maxime, sapiente, quae alias facere nulla eum deserunt laboriosam itaque magni dolore neque voluptatem expedita ipsam nam! Officia aperiam laudantium aspernatur.</p>
                    <span>Rachel N.</span>
                </article>
                </Link>
            </div>

            <div class="item-6">
                <Link class="card">
                <div class="thumb" style={{}}></div>
                <article>
                    <h1>Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quidem deleniti quia atque! Aliquid maiores harum odit exercitationem voluptas nisi!</p>
                    <span>Memory N.</span>
                </article>
                </Link>
            </div>

            <div class="item-7">
                <Link class="card">
                <div class="thumb" style={{}}></div>
                <article>
                    <h1>Lorem, ipsum dolor.</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam rem assumenda dolorem tempora quisquam illo voluptates doloremque voluptate. Earum dolorum pariatur quia consectetur quidem exercitationem.</p>
                    <span>Kendra Schaefer</span>
                </article>
                </Link>
            </div>
    </div>
        </div>
  )
}

export default AllPost