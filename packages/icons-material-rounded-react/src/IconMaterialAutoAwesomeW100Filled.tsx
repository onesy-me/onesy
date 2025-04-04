import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoAwesomeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeW100Filled'

      short_name='AutoAwesome'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.7 7.35q-.125 0-.225-.05t-.15-.175l-.375-.875-.875-.375q-.125-.05-.175-.15-.05-.1-.05-.225t.05-.225q.05-.1.175-.15l.875-.375.375-.875q.05-.125.15-.175.1-.05.225-.05t.225.05q.1.05.15.175l.375.875.875.375q.125.05.175.15.05.1.05.225t-.05.225q-.05.1-.175.15l-.875.375-.375.875q-.05.125-.15.175-.1.05-.225.05Zm0 13q-.125 0-.225-.05t-.15-.175l-.375-.875-.875-.375q-.125-.05-.175-.15-.05-.1-.05-.225t.05-.225q.05-.1.175-.15l.875-.375.375-.875q.05-.125.15-.175.1-.05.225-.05t.225.05q.1.05.15.175l.375.875.875.375q.125.05.175.15.05.1.05.225t-.05.225q-.05.1-.175.15l-.875.375-.375.875q-.05.125-.15.175-.1.05-.225.05Zm-9-4.6q-.2 0-.388-.113-.187-.112-.287-.312L7.2 13.5l-1.825-.825q-.2-.1-.313-.288Q4.95 12.2 4.95 12t.112-.388q.113-.187.313-.287L7.2 10.5l.825-1.825q.1-.2.287-.312.188-.113.388-.113t.388.113q.187.112.287.312L10.2 10.5l1.825.825q.2.1.313.287.112.188.112.388t-.112.387q-.113.188-.313.288L10.2 13.5l-.825 1.825q-.1.2-.287.312-.188.113-.388.113Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeW100Filled.displayName = 'OnesyIconMaterialAutoAwesomeW100Filled';

export default IconMaterialAutoAwesomeW100Filled;
