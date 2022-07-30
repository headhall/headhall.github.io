<script>
    import {icons} from '/icons.js';

    const mono_colors = ['_default', '_link', '_white', '_light', '_transparent'];
    const bright_colors = ['_grey', '_dark', '_blue', '_green', '_red'];
    const sizes = ['_xs', '_s', '_m', '_l', '_xl', '_xxl', '_xxxl'];

    let size = '_m';
    let text = 'Go';
    let icon = '';
    let loading = '';
    let shape = '';
    let disabled = false;
    let adjusted = '_adjust-icon';

</script>


<div class="filter">
<!--    <div class="filter-row">-->
        <div class="filter-block">
            <div class="filter-title">Sizes</div>
            <div class="button-group">
                <button class="button _s" class:_current={size === '_xs'} on:click={()=>size='_xs'}>XS</button>
                <button class="button _s" class:_current={size === '_s'} on:click={()=>size='_s'}>S</button>
                <button class="button _s" class:_current={size === '_m'} on:click={()=>size='_m'}>M</button>
                <button class="button _s" class:_current={size === '_l'} on:click={()=>size='_l'}>L</button>
                <button class="button _s" class:_current={size === '_xl'} on:click={()=>size='_xl'}>XL</button>
                <button class="button _s" class:_current={size === '_xxl'} on:click={()=>size='_xxl'}>XXL</button>
                <button class="button _s" class:_current={size === '_xxxl'} on:click={()=>size='_xxxl'}>XXXL</button>
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">Loading</div>
            <div class="button-group">
                <button class="button _s" class:_current={loading === '_loading'} on:click={()=>loading='_loading'}>Yes</button>
                <button class="button _s" class:_current={loading === ''} on:click={()=>loading=''}>No</button>
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">Disabled</div>
            <div class="button-group">
                <button class="button _s" class:_current={disabled} on:click={()=>disabled=true}>Yes</button>
                <button class="button _s" class:_current={!disabled} on:click={()=>disabled=false}>No</button>
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">Shape</div>
            <div class="button-group">
                <button class="button _s" class:_current={shape === ''} on:click={()=>shape=''}>Normal</button>
                <button class="button _s" class:_current={shape === '_square'} on:click={()=>shape='_square'}>Square</button>
                <button class="button _s" class:_current={shape === '_round'} on:click={()=>shape='_round'}>Round</button>
            </div>
        </div>
<!--    </div>-->
<!--    <div class="filter-row">-->
        <div class="filter-block">
            <div class="filter-title">Icons</div>
            <div class="button-group">
                <button class="button _s" class:_current={text === 'Go' && icon === ''} on:click={()=>{text='Go';icon=''}}>Only text</button>
                <button class="button _s" class:_current={icon === '_left-icon'} on:click={()=>{text=icons.tie()+'Go';icon='_left-icon'}}>Left icon</button>
                <button class="button _s" class:_current={icon === '_right-icon'} on:click={()=>{text='Go'+icons.tie();icon='_right-icon'}}>Right icon</button>
                <button class="button _s" class:_current={text === icons.tie() && icon === ''} on:click={()=>{text=icons.tie();icon=''}}>Only icon</button>
            </div>
        </div>
        <div class="filter-block">
            <div class="filter-title">Adjust icon</div>
            <div class="button-group">
                <button class="button _s" class:_current={adjusted} on:click={()=>adjusted='_adjust-icon'}>Yes</button>
                <button class="button _s" class:_current={!adjusted} on:click={()=>adjusted=''}>No</button>
            </div>
        </div>
<!--    </div>-->
</div>

<div class="buttons">
    <div class="buttons-single">
        {#each mono_colors as color}
            <button class={`button ${color} ${size} ${loading} ${shape} ${icon} ${adjusted}`} disabled={disabled}>
                {@html text}
            </button>
        {/each}
        {#each ['', '_bordered'] as bordered}
            <div>
                {#each bright_colors as color}
                    <button class={`button ${color} ${size} ${bordered} ${loading} ${shape} ${icon} ${adjusted}`} disabled={disabled}>
                        {@html text}
                    </button>
                {/each}
            </div>
        {/each}
    </div>
    <div class="filter-title" style="margin-top:24px;">Group</div>
    <div class="buttons-groups">
        <div class="buttons-group">
            {#each mono_colors as color}
                <div class="button-group">
                    {#each [1, 2, 3] as index}
                        <button class={`button ${color} ${size} ${loading} ${shape} ${icon} ${adjusted}`} disabled={disabled} class:_current={index === 2}>
                            {@html text}
                        </button>
                    {/each}
                </div>
            {/each}
        </div>
        {#each ['', '_bordered'] as bordered}
            <div class="buttons-group">
                {#each bright_colors as color}
                    <div class="button-group">
                        {#each [1, 2, 3] as index}
                            <button class={`button ${color} ${size} ${bordered} ${loading} ${shape} ${icon} ${adjusted}`} disabled={disabled} class:_current={index === 2}>
                                {@html text}
                            </button>
                        {/each}
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</div>

<div style="margin-top:24px;">
<p>— Transparent is useful as a link on a dark background</p>
<p>— Medium actually does not need "_m" by default</p>
<p>— You probably want to control icon size by html, but if you want to adjust icon automatically, use "_adjust-icon"</p>
</div>

<style>
    .filter {display:flex;padding-bottom:12px;border-bottom:1px solid var(--border-color-light-alpha)}
        .filter-block {margin-right:12px;margin-bottom:12px;}
            .filter-title {margin-bottom:6px;font-weight:var(--bold)}

    .buttons {padding-top:24px;}

        .buttons-single {}
            .buttons-single button {margin:3px;}

        .buttons-groups {display:flex;}
            .buttons-group {margin-right:6px;}
                .buttons-group .button-group {margin-bottom:6px;}
</style>
