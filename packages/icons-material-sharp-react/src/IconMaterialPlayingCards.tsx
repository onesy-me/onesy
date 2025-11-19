import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlayingCards = (props: IIcon) => {

  return (
    <Icon
      name='PlayingCards'

      short_name='PlayingCards'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m608-368 46-166-142-98-46 166 142 98ZM160-207 54-257l106-229v279Zm80 87v-320l116 320H240Zm210 23L217-738l453-165 233 641L450-97Zm48-103 302-110-179-490-301 110 178 490Zm62-300Z"/>
    </Icon>
  );
};

IconMaterialPlayingCards.displayName = 'OnesyIconMaterialPlayingCards';

export default IconMaterialPlayingCards;
