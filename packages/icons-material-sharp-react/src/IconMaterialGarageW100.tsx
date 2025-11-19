import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGarageW100 = (props: IIcon) => {

  return (
    <Icon
      name='GarageW100'

      short_name='Garage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-696h696v696H132Zm28-28h640v-640H160v640Zm180-252q-11 0-19.5-8.5T312-440q0-11 8.5-19.5T340-468q11 0 19.5 8.5T368-440q0 11-8.5 19.5T340-412Zm280 0q-11 0-19.5-8.5T592-440q0-11 8.5-19.5T620-468q11 0 19.5 8.5T648-440q0 11-8.5 19.5T620-412Zm-368-96v236h28v-80h400v80h28v-236l-62.65-180H315l-63 180Zm36-20 46-132h292l46 132H288ZM160-800v640-640Zm120 420v-120h400v120H280Z"/>
    </Icon>
  );
};

IconMaterialGarageW100.displayName = 'OnesyIconMaterialGarageW100';

export default IconMaterialGarageW100;
