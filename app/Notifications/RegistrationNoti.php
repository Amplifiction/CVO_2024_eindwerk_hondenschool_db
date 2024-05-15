<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class RegistrationNoti extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct($user)
    {
        $this->user = $user;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
                    ->subject('Welkom bij hondenschool De Roedel!')
                    ->line('Je bent succesvol bij ons geregistreerd, '.$this->user['first_name'].'.
                         Je kan je voortaan aanmelden met je mailadres '.$this->user['email'].' en het door jou gekozen wachtwoord.
                         Wij wensen je veel plezier met je viervoeter(s).')
                    ->line('Je ontvangt ook een mail ter verificatie van je emailadres.
                         Je moet ingelogd zijn in de browser die wordt geopend door de verificatielink!
                         Onder "profiel bewerken" vind je een knop waarmee je deze verificatiemail opnieuw kan verzenden.
                         In het kader van deze demoversie werden alle restricties mbt email verificatie opgeheven.')
                    ->line('(Do not reply: mails gericht aan deze mailbox worden niet gelezen.)')
                    ->salutation('Tot in de wei, of de kantine!');
                    // ->action('Notification Action', url('/'))
                    // ->line('Thank you for using our application!')
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
