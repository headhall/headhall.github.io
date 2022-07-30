<script>
    import {page} from '/pages.js'
    console.log(page)
</script>

<div class="header">
    <a href="/" class="logo">modify.css</a>
    <div class="menu">
        <a class="link" href="/buttons" class:_current={page.path === '/buttons'}>Buttons</a>
    </div>
    <div class="menu">

    </div>
</div>

<main class={'shape' + (page.shape ? ' ' + page.shape : ' _default')}>
    <svelte:component this={page.component}/>
</main>

<style>
    :root {
        --header-height:60px;

        --background-color-light: hsl(0,0%,96%);
        --background-color-light-alpha: hsla(0,0%,0%,0.04);
        --border-color-light: hsl(0,0%,85%);
        --border-color-light-alpha: hsla(0,0%,0%,0.15);
    }
    .header {box-shadow:0 1px 0 var(--border-color-light-alpha);z-index:2;position:sticky;top:0;height:60px;display:flex;background:#fff;}
        .logo {display:flex;align-items:center;padding:0 24px;font-weight:bold;text-decoration:none;color:#000;}
        .menu {display:flex;}
            .link {display:flex;align-items:center;padding:0 24px;text-decoration:none;color:#000;}
            .link:hover {animation:dark 1s -.08s forwards paused;}
            .link._current {animation:dark 1s -.1s forwards paused;}
            .link:active {animation:dark 1s -.12s forwards paused;}

    .shape {min-height:calc(100vh - var(--header-height));}
    .shape._buttons {padding:24px;background:var(--background-color-light);}
</style>