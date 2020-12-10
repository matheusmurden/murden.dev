import capsize from 'capsize'
import Head from 'next/head'

const displayFontMetrics = {
  capHeight: 698,
  ascent: 1025,
  descent: -275,
  lineGap: 0,
  unitsPerEm: 1000
};

const textFontMetrics = {
  capHeight: 676,
  ascent: 952,
  descent: -441,
  lineGap: 0,
  unitsPerEm: 1000
};

function unit(value) {
  return value * 8;
}

const h1Config = capsize({
  fontMetrics: displayFontMetrics,
  capHeight: unit(7),
  lineGap: unit(8)
})

const h2Config = capsize({
  fontMetrics: displayFontMetrics,
  capHeight: unit(5),
  lineGap: unit(6)
})

const h3Config = capsize({
  fontMetrics: displayFontMetrics,
  capHeight: unit(4),
  lineGap: unit(5)
})

const h4Config = capsize({
  fontMetrics: displayFontMetrics,
  capHeight: unit(3),
  lineGap: unit(4)
})

const h5Config = capsize({
  fontMetrics: displayFontMetrics,
  capHeight: unit(2),
  lineGap: unit(3)
})

const h6Config = capsize({
  fontMetrics: displayFontMetrics,
  capHeight: unit(1.5),
  lineGap: unit(2.5)
})

const pConfig = capsize({
  fontMetrics: textFontMetrics,
  capHeight: 16,
  lineGap: 24
})

export const LineTrimStyle = () => {
  return (
    <Head>
      <style jsx global>
        {`
        p {
          font-size: ${pConfig.fontSize};
          line-height: ${pConfig.lineHeight};
          padding: ${pConfig.padding};
        }
        p::before {
          ${Object.entries(pConfig['::before']).join(';').split(',').join(':').replace('marginTop', 'margin-top')}
        }
        p::after {
          ${Object.entries(pConfig['::after']).join(';').split(',').join(':').replace('marginBottom', 'margin-bottom')}
        }
        
        h1 {
          font-size: ${h1Config.fontSize};
          line-height: ${h1Config.lineHeight};
          padding: ${h1Config.padding};
        }
        h1::before {
          ${Object.entries(h1Config['::before']).join(';').split(',').join(':').replace('marginTop', 'margin-top')}
        }
        h1::after {
          ${Object.entries(h1Config['::after']).join(';').split(',').join(':').replace('marginBottom', 'margin-bottom')}
        }

        h2 {
          font-size: ${h2Config.fontSize};
          line-height: ${h2Config.lineHeight};
          padding: ${h2Config.padding};
        }
        h2::before {
          ${Object.entries(h2Config['::before']).join(';').split(',').join(':').replace('marginTop', 'margin-top')}
        }
        h2::after {
          ${Object.entries(h2Config['::after']).join(';').split(',').join(':').replace('marginBottom', 'margin-bottom')}
        }

        h3 {
          font-size: ${h3Config.fontSize};
          line-height: ${h3Config.lineHeight};
          padding: ${h3Config.padding};
        }
        h3::before {
          ${Object.entries(h3Config['::before']).join(';').split(',').join(':').replace('marginTop', 'margin-top')}
        }
        h3::after {
          ${Object.entries(h3Config['::after']).join(';').split(',').join(':').replace('marginBottom', 'margin-bottom')}
        }

        h4 {
          font-size: ${h4Config.fontSize};
          line-height: ${h4Config.lineHeight};
          padding: ${h4Config.padding};
        }
        h4::before {
          ${Object.entries(h4Config['::before']).join(';').split(',').join(':').replace('marginTop', 'margin-top')}
        }
        h4::after {
          ${Object.entries(h4Config['::after']).join(';').split(',').join(':').replace('marginBottom', 'margin-bottom')}
        }

        h5 {
          font-size: ${h5Config.fontSize};
          line-height: ${h5Config.lineHeight};
          padding: ${h5Config.padding};
        }
        h5::before {
          ${Object.entries(h5Config['::before']).join(';').split(',').join(':').replace('marginTop', 'margin-top')}
        }
        h5::after {
          ${Object.entries(h5Config['::after']).join(';').split(',').join(':').replace('marginBottom', 'margin-bottom')}
        }

        h6 {
          font-size: ${h6Config.fontSize};
          line-height: ${h6Config.lineHeight};
          padding: ${h6Config.padding};
        }
        h6::before {
          ${Object.entries(h6Config['::before']).join(';').split(',').join(':').replace('marginTop', 'margin-top')}
        }
        h6::after {
          ${Object.entries(h6Config['::after']).join(';').split(',').join(':').replace('marginBottom', 'margin-bottom')}
        }
        `}
      </style>
    </Head>
  )
}

