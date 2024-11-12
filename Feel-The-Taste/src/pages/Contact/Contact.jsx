import { Box, FormControl, FormLabel, Input, Textarea, Button, VStack, useToast } from '@chakra-ui/react';
import Tekstblok from '../../components/Tekstblok';
import Tussentitel from '../../components/Tussentitel';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefoon: '',
    bedrijfsnaam: '',
    locatie: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formPayload = new FormData();

    try {
      formPayload.append('access_key', 'edcdbd75-a064-487a-98de-3407cf7e02b8');
      formPayload.append('name', formData.name);
      formPayload.append('email', formData.email);
      formPayload.append('telefoon', formData.telefoon);
      formPayload.append('bedrijfsnaam', formData.bedrijfsnaam);
      formPayload.append('locatie', formData.locatie);
      formPayload.append('message', formData.message);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: t('contact_form_toast_success_title'),
          description: t('contact_form_toast_success_description'),
          status: 'success',
          duration: 5000,
          isClosable: true,
        });

        setFormData({ name: '', email: '', telefoon: '', bedrijfsnaam: '', locatie: '', message: '' });
      } else {
        toast({
          title: t('contact_form_toast_error_title'),
          description: t('contact_form_toast_error_description'),
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
      // eslint-disable-next-line no-unused-vars
    } catch (e) {
      toast({
        title: t('contact_form_toast_error_title'),
        description: t('contact_form_toast_error_description'),
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="600px" mx="auto" p={4}>
      <Box textAlign="center" m={4}>
        <Tussentitel titel={t('contact_title')} />
      </Box>
      <Tekstblok tekst={t('contact_text')} />
      <VStack mt={8} spacing={4} as="form" onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value="f59010ef-0750-45aa-9940-f4658453be47" />

        <FormControl id="naam" isRequired>
          <FormLabel fontSize="lg">{t('contact_form_name_label')}</FormLabel>
          <Input type="text" name="name" value={formData.name} onChange={handleChange}
            placeholder={t('contact_form_name_placeholder')} fontSize="lg" bg="white" required />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel fontSize="lg">{t('contact_form_email_label')}</FormLabel>
          <Input type="email" name="email" value={formData.email} onChange={handleChange}
            placeholder={t('contact_form_email_placeholder')} fontSize="lg" bg="white" required />
        </FormControl>

        <FormControl id='telefoonnr'>
          <FormLabel fontSize="lg">{t('contact_form_phone_label')}</FormLabel>
          <Input type="tel" name="telefoon" value={formData.telefoon} onChange={handleChange}
            placeholder={t('contact_form_phone_placeholder')} fontSize="lg" bg="white" />
        </FormControl>

        <FormControl id="bedrijfsnaam">
          <FormLabel fontSize="lg">{t('contact_form_company_label')}</FormLabel>
          <Input type="text" name="bedrijfsnaam" value={formData.bedrijfsnaam} onChange={handleChange}
            placeholder={t('contact_form_company_placeholder')} fontSize="lg" bg="white" />
        </FormControl>

        <FormControl id="locatie" isRequired>
          <FormLabel fontSize="lg">{t('contact_form_location_label')}</FormLabel>
          <Input type="text" name="locatie" value={formData.locatie} onChange={handleChange}
            placeholder={t('contact_form_location_placeholder')} fontSize="lg" bg="white" required />
        </FormControl>

        <FormControl id="bericht" isRequired>
          <FormLabel fontSize="lg">{t('contact_form_message_label')}</FormLabel>
          <Textarea name="message" value={formData.message} onChange={handleChange}
            placeholder={t('contact_form_message_placeholder')} fontSize="lg" bg="white" required />
        </FormControl>

        <Button type="submit"
          bg="gray.800"
          color="white"
          _hover={{ bg: 'gray.600' }}
          size="lg"
          width="full"
          fontSize="lg">
          {t('contact_form_submit_button')}
        </Button>
      </VStack>
    </Box>
  );
};

export default Contact;
