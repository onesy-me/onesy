import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewCarousel = (props: IIcon) => {

  return (
    <Icon
      name='ViewCarousel'

      short_name='ViewCarousel'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><rect height="10" opacity=".3" width="6" x="9" y="7"/><path d="M2,7h4v10H2V7z M7,19h10V5H7V19z M9,7h6v10H9V7z M18,7h4v10h-4V7z"/>
    </Icon>
  );
};

IconMaterialViewCarousel.displayName = 'OnesyIconMaterialViewCarousel';

export default IconMaterialViewCarousel;
